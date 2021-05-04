const express = require('express')
const weather = require('./assets/weather.json')
const cors = require('cors')

const app = express()
require('dotenv').config();
app.use(cors())

const PORT = process.env.PORT ||3020

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/weather', (req, res)=>{
  const arrayOfData = weather.data.map(data => new Weather(data));
  res.send(arrayOfData);

});

class Weather {
  constructor(data){
    this.date = data.valid_date;
    this.description = data.weather.description;
  }
}
 
app.listen(3333)


// البكج، أحرف كبيرة للclass