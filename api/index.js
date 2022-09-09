import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import barbersRoute from "./routes/barbers.js"

const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
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

// middlewares
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/barbers", barbersRoute)

app.listen(8000, () => {
  connect()
  console.log('Connected to backend at port 8000👨‍💻')
})
