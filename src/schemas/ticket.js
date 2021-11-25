/**
 * Carer schema module.
 *
 * @module schemas/carer
 */

const { Schema } = require('mongoose');

const schema = new Schema(
  {
    _id: {
      required:true,
      type: String,
      unique:true
    },
    productId: String,
    amount: Number,
    paymentType: {
      type: String,
      requerid: true,
      enum : ['Visa','Mastercard'],
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = schema;