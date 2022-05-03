const asyncHandler = require('express-async-handler')
const Hospital = require('../models/hospitalModel')

//@desc    Register user & get token
//@route   POST /api/users/register
//@access  Public

const registerHospital = asyncHandler(async (req, res) => {
  let { email, name, address, number } = req.body

  const hospital = await Hospital.create({
    name,
    email,
    address,
    number,
  })

  if (hospital) {
    res.status(201).json({
      hasError: false,
      message: 'hospital created successfully',
      hospital,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

module.exports = {
  registerHospital,
}
