const express = require('express')

//rest object
const app = express()

//route
app.use(`/api/v1/test`, require('./routes/testRoutes.js'))

//port
const PORT = 8080

//listen
app.listen(PORT, ()=>{
    console.log("server running"); 
})