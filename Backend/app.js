import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorHandler.js'
import productsRouter from './routes/productsRouter.js'

// dotenv config
dotenv.config()

// db connection 
connectDB() 

// express initialization
const port = process.env.PORT || 3000
const app = express()

// body parser 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cookie parser
app.use(cookieParser())

// cross origin setup
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // This allows the browser to include cookies in the requests
  }))

app.get('/', (req, res)=> {
    res.send('Home Screen')
})

// routes
app.use('/products', productsRouter)

// errror handler
app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Active on PORT ${port}`)
})