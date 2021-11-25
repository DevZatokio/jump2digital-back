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
    const _id = req.body._id;
    if (!_id) {
      return PreconditionFailed(res);
    }

    const Product = db.model('product')
    const Ticket = db.model('ticket')
    
    // validation product and ticket
    
    const count = await Ticket.countDocuments({productId: _id })

    if(count > 0 ){
      PreconditionFailed(res, {message: 'Product is already on a ticket, it cannot be deleted.'})
    }

    const raw = await Product.deleteOne({
      _id: _id
    })
    if(!raw || raw.deletedCount == 0){
      return BadRequest(res)
    }

    return Success(res)
  } catch (error) {
    return InternalServerError(res);
  }
};
