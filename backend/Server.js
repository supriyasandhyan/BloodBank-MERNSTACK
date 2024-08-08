const express = require('express')
const dotenv = require("dotenv")
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require('./config/db.js');

//dot env
dotenv.config();

//db connectn
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json())
app.use(cors());
app.use(morgan("dev"));

//route
app.use("/api/v1/test", require('./routes/testRoutes.js'))
app.use("/api/v1/auth", require('./routes/authRoutes.js'))
app.use("/api/v1/inventory", require("./routes/inventoryRoutes.js"))

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, ()=>{
    console.log(`node server is running in ${process.env.DEV_MODE} on port ${process.env.PORT}`); 
})