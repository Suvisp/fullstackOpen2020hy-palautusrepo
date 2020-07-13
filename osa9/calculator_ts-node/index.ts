// npm install --save-dev @types/express
import express from 'express';
const app = express();

import { bmiCalculator } from "./bmiCalculator";

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

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});