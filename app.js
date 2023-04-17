const express = require('express')
const mongoose = require('mongoose')
const empRoute = require('./Routes/empRoute')
const userRoute = require('./Routes/userRoute')
const cors = require('cors')


require('dotenv/config')

const app = express()


app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send('Trupti')
})
app.use('/api/user',userRoute)
app.use('/api/emp',empRoute)


app.listen(process.env.PORT)

async function main() {
    const res =  await mongoose.connect(process.env.DB,{  useNewUrlParser: true,
     useUnifiedTopology: true})

     const data = await res.default
     const response = data.STATES['1']
     console.log(response);
   }
   main()