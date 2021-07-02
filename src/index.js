const   express = require('express')
const   app = express()
const   morgan = require('morgan')
const   cors = require('cors')
const bodyparser = require('body-parser')
require('./database')

app.set('Port', 4000)

app.listen(app.get('Port'), ()      =>{
    console.log('Escuchando en el puerto', app.get('Port'))
});
