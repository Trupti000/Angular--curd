const { getEmp, postEmp, putEmp, deleteEmp } = require('../Controller/empController')

const route = require ('express').Router()

route.get('/',getEmp)
route.post('/',postEmp)
route.put('/',putEmp)
route.delete('/',deleteEmp)



module.exports=route