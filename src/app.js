const express = require('express'),
    app = express(),
    port = 3000,
    root = '/api/delay/'

app.get(root + ':id', (req, res) => {
    let timer = Number(req.params.id)
    if (Number.isInteger(timer)) {
        setTimeout(() => { res.send(`after ${timer}s, CoreCode response: Hello World`) }, timer)
    } else {
        res.send('use numbers for delay!')
    }
})

app.get(root, (req, res) => {
    setTimeout(() => { res.send(`default after 1000s, CoreCode response: Hello`) }, 1000);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})