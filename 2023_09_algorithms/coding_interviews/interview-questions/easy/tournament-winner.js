let HOME_TIME_WON = 1;

export function tournamentWinner(competitions, results) {
  let currentBestTeam = "";

  let scores = { [currentBestTeam]: 0 };

  for (let index = 0; index < competitions.length; index++) {
    let result = results[index];
    let [homeTeam, awayTeam] = competitions[index];

    let winningTeam = result == HOME_TIME_WON ? homeTeam : awayTeam;
    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!scores[team]) {
    scores[team] = 0;
  }
  scores[team] += points;
}
