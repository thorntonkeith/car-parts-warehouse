//Using Express Library and Framework
const express = require('express')
const app = express()
const port = 3000

//HTTP Get response
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//HTTP Listener on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})