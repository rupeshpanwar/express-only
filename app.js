const express = require('express')

const app = express()

app.all('*', (req, res) => {
    console.log(req.url)
    res.send(`I'm listening`)
})

app.listen(3000)
console.log('listeninig on port 3000')