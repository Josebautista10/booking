import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('mongoDB connected!✅')
  } catch (error) {
    handleError(error)
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected😢')
})

mongoose.connection.on('connected', () => {
  console.log('mongoDB is connected😁')
})


app.listen(8000, () => {
  connect()
  console.log('Connected to backend at port 8000👨‍💻')
})
