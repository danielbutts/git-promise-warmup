let express = require('express')
let rp = require('request-promise')
let bodyParser = require('body-parser')


let app = express();

let port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`));
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.json(`Hello!`);
});

app.post('/', (req,res) => {
  console.log(req.body.phrase.split(' ').join('_'))
  res.json(`You posted!`);
});
