// Operational Transformations Validation
// https://en.wikipedia.org/wiki/Operational_transformation

function operationalTransformationsValidation(stale, latest, otjson) {
  const command = JSON.parse(otjson);
  if (command.length === 0) return true;
  const result = walk(command, stale);
  const status = result.latest === latest && latest.length - 1 === result.len;
  return status;
}

function walk(otjson, latest, currentPosition = 0) {
  if (otjson.length == 0) {
    return { latest, len: currentPosition };
  }
  const { op, count, chars } = otjson.shift();
  switch (op) {
    case "skip":
      const skip = currentPosition + count;
      return walk(otjson, latest, skip);
    case "delete":
      const deleteResult = deleteState(count, currentPosition, latest);
      return walk(otjson, deleteResult, currentPosition);
    case "insert":
      const insert = insertState(chars, currentPosition, latest);
      return walk(otjson, insert, currentPosition);
    default:
      return { latest, len: currentPosition };
  }
}
function deleteState(count, currentPosition, latest) {
  const left = latest.substring(0, currentPosition);
  const max = currentPosition + count;
  const right = latest.substring(max);
  return left + right;
}

function insertState(chars, currentPosition, latest) {
  const left = latest.substring(0, currentPosition);
  const right = latest.substring(currentPosition);
  return left + chars + right;
}

// teste case
// isValid(
//   "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
//   "Repl.it uses operational transformations.",
//   '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
// ); // true

// isValid(
//   "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
//   "Repl.it uses operational transformations.",
//   '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
// ); // false, delete past end

// isValid(
//   "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
//   "Repl.it uses operational transformations.",
//   '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
// ); // false, skip past end
