const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const {Sequelize} =require("sequelize")
const pg = require("pg")
const router = express.Router()
const path = require("path")
const app = express()
const appPort = "4000"

//connecting to db
const sequelize = new Sequelize('crud', 'posgtres', 'austinforreal', {
    host: 'localhost',
    dialect:'postgres'
  });

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

//adding cors to middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))



//routes
router.get('/', (req,res)=>{
res.send()
} )


router.post("/create", (res,req)=>{


})

router.delete('/delete/{id}',(req,res)=>{


})

router.put(`/update/${id}`, (res,req)=>{


})


app.listen(appPort, ()=>{

    console.log("working")
})