const express = require("express");
const app = express();
const port = 8000;
const db = require('./config/mongoose');


// For parsing application/json
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/',(req, res) => {
    res.send('this is your homepage');
  });


  app.use('/api', require('./routes/index'));

  app.listen(port, () => {
    console.log(`Your app is listening at http://localhost:${port}`)
  })