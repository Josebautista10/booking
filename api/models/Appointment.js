import mongoose from 'mongoose'

const AppointmentSchema = new mongoose.Schema({
  date: { type: Date, required: true},
  service: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  image: {
    type: [String],
  },
  barber: {
    type: [String]
  },
  user: {
    type: [String]
  },

})

export default mongoose.model('Appointment', AppointmentSchema)
