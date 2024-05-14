const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const cocktailRouter = express.Router();


cocktailRouter.get('/players', (req, res) => {

  res.json({ message: "Fetching players" });
});


app.use('/api', playersRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
