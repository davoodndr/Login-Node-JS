const express = require('express');
const router = express.Router()

const me = {
  name : 'Davood Hakkim',
  email : 'test@gmail.com',
  pass : '123456'
}

router.get('/',(req,res) => {
  if(req.session.user){
    res.render('home',{user: me})
    req.session.invalid = false
  }else{
    res.render('login')
  }
})

router.get('/login',(req,res) => {
  res.render('login')
})


router.post('/auth',(req,res) => {
  console.log(req.body);
  
  if(req.body.email === me.email && req.body.password === me.pass){
    req.session.user = me.email
    req.session.invalid = false
  }else{
    req.session.invalid = true
  }
  res.redirect('/')
})

router.get('/logout',(req,res) => {
  req.session.destroy()
  res.redirect('/')
})

module.exports = router