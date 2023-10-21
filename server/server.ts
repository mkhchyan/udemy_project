import express from 'express'
import cors from 'cors'
import { readdirSync } from 'fs'
import mongoose from 'mongoose'

const morgan = require("morgan")
require("dotenv").config()

//create express app
const app = express()

// db connection
mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL as string, {

})
    .then(() => console.log('db connected'))
    .catch((err) => console.log('db connection error', err));

//apply middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//route
readdirSync('./routes').map((r) => app.use('/auth', require(`./routes/${r}`)))


app.listen(process.env.PORT || 5000, () => console.log("Server is running on port 5000"))