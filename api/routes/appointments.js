import express from 'express'
import Appointment from '../models/Appointment.js'
const router = express.Router()

// CREATE
router.post('/', async (req, res) => {
  const newAppointment = new Appointment(req.body)

  try {
    const savedAppointment = await newAppointment.save()
    res.json(savedAppointment)
  } catch (error) {
    res.sendStatus(500).json(error)
  }
})

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updateAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.json(updateAppointment)
  } catch (error) {
    res.sendStatus(500).json(error)
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(
      req.params.id,
      { $set: req.body }
    )
    res.json(deletedAppointment)
  } catch (error) {
    res.sendStatus(500).json(error)
  }
})
// GET
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find(
      req.params.id
    )
    res.json(appointments)
  } catch (error) {
    res.sendStatus(500).json(error)
  }
})
// GET ALL

export default router
