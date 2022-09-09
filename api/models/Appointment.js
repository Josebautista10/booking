import mongoose from 'mongoose'

const AppointmentSchema = new Schema({
  date: { type: Date, required: true},
  service: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  image: {
    type: [String],
    required: true
  },
  barber: {
    type: [String]
  }
})

export default mongoose.model('Appointment', AppointmentSchema)
