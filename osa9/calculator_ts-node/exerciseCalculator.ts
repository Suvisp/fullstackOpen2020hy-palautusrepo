interface ResultValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (args: Array<number>, target: number): ResultValues => {
  let periodLength = args.length;
  let trainingDays = args.filter((hours) => hours !== 0).length;
  let rating = 0;
  let ratingDescription = '';
  let average = args.reduce((a, b) => a + b) / args.length;
  if (average < target * 0.5) {
    rating = 1;
    ratingDescription = 'you need to exercise way more!';
  }
  if (average >= target * 0.5) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  }
  if (average >= target) {
    rating = 3;
    ratingDescription = 'hurray, you are doing great!';
  }
  let success = false
  if (rating === 3) { success = true }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))