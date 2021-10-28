const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000


function cohortRocks() {
    console.log('arguments:', process.argv.slice(2))
    console.log(`web ${process.argv[2]} rocks`) // fix it using process.argv !
  }
  function cohortRocksEnv() {
    console.log(`Home folder is "${process.env.HOME}"`)
    console.log(`My shell is "${process.env.SHELL}"`)
  }
  cohortRocksEnv()