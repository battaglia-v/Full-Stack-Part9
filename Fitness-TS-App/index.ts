import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get("/bmi", (req, res) => {
  
  const { height, weight } = req.query;

  if (!height || !weight) {
    return res.status(400).json({ error: "parameters missing" });
  }

  const x = Number(height);
  const y = Number(weight);


  if (isNaN(x) || isNaN(y)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(x, y);

  return res.json({ x, y, bmi });
});

app.post("/exercises", (req, res) => {
  
  const { target, exerciseMetrics} = req.body;
  console.log(req.body)

  if (!target || !exerciseMetrics ) {
    return res.status(400).json({ error: "parameters missing" });
  }
  
  if (!Array.isArray(exerciseMetrics)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  return res.json(calculateExercises(target, exerciseMetrics));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});