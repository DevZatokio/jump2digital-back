/**
 * Product schema module.
 *
 * @module schemas/product
 */

const { Schema } = require('mongoose');

const schema = new Schema(
  {
   _id: {
     required:true,
     type:String,
     unique:true
   },
   name:String,
   price: Number,
   description:{
     type: String,
     enum:['Laptops','PCs','Phones','Tablets', 'Other']
   }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = schema;