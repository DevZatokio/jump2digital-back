const { InternalServerError, PreconditionFailed,BadRequest,Success } = require('../../components/responses');
const db = require('../../components/database');
/**
 *
 * @param {Request} req request node
 * @param {Response} res response node
 * @returns Response JSON
 */
module.exports = async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      return PreconditionFailed(res);
    }

    const Product = db.model('product')

    // last data 
    const data = await Product.findOne({_id: body._id})

    const cond = {
      _id: body._id
    }
    
    const options = {
      runValidators:true
    }
    
    let $set = {}
    let $unset = {}

    if(body.name != data.name ){
      $set.name = body.name
    }

    if(body.price != data.price){
      $set.price = body.price
    }

    if(body.description != data.description){
      $set.description = body.description
    }
    

    const raw = await Product.updateOne(cond,{$set,$unset},options)

    if(!raw || raw.modifiedCount == 0){
      return BadRequest(res)
    }

    return Success(res)
  } catch (error) {
    return InternalServerError(res);
  }
};
