import express from 'express'
import cors from 'cors'
import { readdirSync } from 'fs'

const morgan = require("morgan")
require("dotenv").config()

//create express app
const app = express()

//apply middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//route
readdirSync('./routes').map((r) => app.use('/auth', require(`./routes/${r}`)))


app.listen(process.env.PORT || 5000, () => console.log("Server is running on port 5000"))