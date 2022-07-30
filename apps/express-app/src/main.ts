/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send({ message: 'Hello World from Nx 🌎' });
});

app.get('/api-test', (req, res) => {
  res.status(200).json({message:'Hello World from Nx 🌎 - api'})
}); 


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
