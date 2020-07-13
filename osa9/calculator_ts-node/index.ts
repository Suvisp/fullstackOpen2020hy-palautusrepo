// npm install --save-dev @types/express
import express from 'express';
const app = express();

import { bmiCalculator } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

app.use(express.json())


app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    let object = new Object({
      weight: req.query.weight,
      height: req.query.height,
      bmi: bmiCalculator(Number(req.query.height), Number(req.query.weight))
    })
    res.send(object);
  } catch (err) {
    res.send({ error: "malformatted parameters" })
  }
});

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body
  if ( !daily_exercises || !target) {
    res.send({ error: "parameters missing" })
  }
  if (!(daily_exercises instanceof Array) || !(typeof target === 'number')) {
  // else if ( isNaN(daily_exercises) || isNaN(target)) {
    res.send({ error: "malformatted parameters" })
  }

  let resultValues = calculateExercises(target, daily_exercises)
  res.json(resultValues)
})

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});