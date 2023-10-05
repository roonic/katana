const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.static('./public'))

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port,() =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
