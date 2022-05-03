const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    illness: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
)

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
