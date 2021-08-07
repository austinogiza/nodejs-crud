const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const pg = require("pg")
const path = require("path")
const app = express()
const appPort = 4000

//connecting to db
const sequelize = require('./models/db')
const db = require("./models/db")
sequelize.authenticate()
.then(res=>{

  console.log("database connected")
})
.catch(err=>{

  console.log("error", err)
})

//adding cors to middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))




const router = express.Router()


//routes
router.get('/', cors(), (req,res)=>{
    res.send()
    } )
    
    
    router.post("/create", (res,req)=>{
    
    
    })
    
    router.delete(`/delete/:id`,(req,res)=>{
    
    
    })
    
    router.put(`/update/:id`, (res,req)=>{
    
    
    })
    
app.listen(appPort, ()=>{


    console.log("server working")
})