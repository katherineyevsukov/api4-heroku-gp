require('dotenv').config()//injecting env variables

const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send(`
    <h1>Web 47 rocks!</h1>
  `)
})

app.get('/port', (req, res) => {
    res.send(`<div>port is ${PORT}</div>`)
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})


function cohortRocks() {
    console.log('arguments:', process.argv.slice(2))
    console.log(`web ${process.argv[2]} rocks`) // fix it using process.argv !
  }
  function cohortRocksEnv() {
    console.log(`Home folder is "${process.env.HOME}"`)
    console.log(`My shell is "${process.env.SHELL}"`)
  }
  cohortRocksEnv()