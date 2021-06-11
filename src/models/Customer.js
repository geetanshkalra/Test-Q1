const mongoose = require('mongoose');
const validator = require('validator');

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      },
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

customerSchema.statics.findByCredentials = async (email) => {
  const customer = await User.findOne({ email });

  if (customer) {
    throw new Error('Customer with that email already exists');
  }

  return false;
};

const Customer = mongoose.model('customer', userSchema);

module.exports = Customer;
