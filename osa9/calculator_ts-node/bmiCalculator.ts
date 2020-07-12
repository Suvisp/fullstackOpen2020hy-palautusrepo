type Result = string;

const bmiCalculator = (height: number, weight: number): Result => {
  if (!height || !weight) throw new Error("No values provided");

  height = height / 100;
  const BMI = weight / (height * height);

  if (BMI >= 40) {
    return "obese Class III (Very severely obese)";
  } else if (BMI >= 35) {
    return "obese Class II (Severely obese)";
  } else if (BMI >= 30) {
    return "obese Class I (Moderately obese)";
  } else if (BMI >= 25) {
    return "overweight";
  } else if (BMI >= 18.5) {
    return "normal (healthy weight)";
  } else if (BMI >= 16) {
    return "underweight";
  } else if (BMI >= 15) {
    return "severely underweight";
  } else {
    return "very severely underweight";
  }
};

// console.log(bmiCalculator(180, 74))

let height: number = Number(process.argv[2]);
let weight: number = Number(process.argv[3]);
// console.log(bmiCalculator(height, weight))

try {
  console.log(bmiCalculator(height, weight))
} catch (error) {
  console.log('Something went wrong, error message: ', error.message);
}