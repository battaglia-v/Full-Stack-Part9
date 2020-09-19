import express from 'express';
import { calculator } from './calculator'

const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});
  
app.get('/calculate', (req, res) => {
  const { value1, value2, op } = req.query
  
  const Value1 = Number(value1);
  const Value2 = Number(value2);
  
  
  const result = calculator(Value1, Value2, op)
  res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});