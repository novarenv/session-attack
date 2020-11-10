const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json())
app.use(cookieParser())
app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.post('/att-cookies', (req, res) => {
  console.log(req.body)
})

app.listen(3001, () => console.log('Hello World app berjalan di http://localhost:3001'))