export function optimalFreelancing(jobs) {
  const length_of_week = 7;
  let profit = 0;
  jobs.sort((a, b) => b.payment - a.payment)
  const timeline = Array(length_of_week + 1).fill(false);

  for (const job of jobs) {
    const maxTime = Math.min(job.deadline, length_of_week)
    for (let time = maxTime; time > 0; time--) {
      if (timeline[time] === false) {
        timeline[time] = true;
        profit += job.payment
        break;
      }
    }
  }

  return profit
}

