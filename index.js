const express = require('express')
const app = express()
const port = 3000

const json = {
    "ui_tests": true
}

app.get('/', (req, res) => {
  res.json(json)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})