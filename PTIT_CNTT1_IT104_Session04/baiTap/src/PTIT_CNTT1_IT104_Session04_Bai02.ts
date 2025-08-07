let scores: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];

const averageScore = (arr: number[]) => {
  let total: number = arr.reduce((total, e) => (total += e), 0);
  return total / scores.length;
};

console.log(averageScore(scores));
