import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/engschool", (req, res) => {
  res.status(200).send({ message: "Okay server start!" });
});

app.listen(port, () => console.log(`Start server port in: ${port}`))
