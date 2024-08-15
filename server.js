const express = require('express');
const session = require('express-session');
const hbs = require('hbs');
const nocache = require('nocache');
const userRoute = require('./routes/user')

const app = express()


app.set('view engine','hbs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(nocache())

app.use('/',userRoute)

app.listen(8080,() => console.log("Server running on 8080"))
