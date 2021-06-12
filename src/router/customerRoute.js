const express = require('express')
const Customer = require('../models/Customer')
const router = new express.Router()

router.post('/', async (req, res) => {
  try {
    // Checking if customer with that email already exists
    let customer = await Customer.findByCredentials(req.body.email)

    if (!customer) {
      customer = new Customer(req.body)
      await customer.save()
      res.status(201).send({ customer })
    }
  } catch (e) {
    res.status(400)
    res.json({ message: 'Customer with that email already exists' })
  }
})

module.exports = router
