interface ResultValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (target: number, args: Array<number>): ResultValues => {  
  if (args.length === 0) throw new Error("No values provided");

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

// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))

// let target: number = Number(process.argv[2]);
// const arrayOfHours = process.argv.slice(3).map((hour) => Number(hour))
// console.log(calculateExercises(target, arrayOfHours))

// try {
//   console.log(calculateExercises(target, arrayOfHours))
// } catch (error) {
//   console.log('Something went wrong, error message: ', error.message);
// }