
const { login,postUser, getUser, putUser, deleteUser, postlogin,getUserbyid } = require('../Controller/userController')

const route = require('express').Router()

route.post('/',postUser)

route.get('/byid/:id',getUserbyid)

route.post('/login',postlogin)

route.get('/',getUser)
route.post('/',postUser)
route.put('/:id',putUser)
route.delete('/:id',deleteUser)

module.exports=route