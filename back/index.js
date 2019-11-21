const path = require('path')

const express = require('express')
const app = express()

const port = 1234

app.use(express.static(path.join(__dirname, '../dist')))

// app.get('/', (req, res) => {
//     res.send("Hello!")
// })

app.listen(port, () => console.log(`Server app listening on port ${port}`))
