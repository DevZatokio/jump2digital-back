const { InternalServerError, PreconditionFailed, Success, NoContent } = require('../../components/responses');
const db = require('../../components/database');
/**
 *
 * @param {Request} req request node
 * @param {Response} res response node
 * @returns Response JSON
 */
module.exports = async (req, res) => {
  try {
    const _id = req.params._id;

    if (!_id) {
      return PreconditionFailed(res);
    }

    const Product = db.model('product');

    const result = await Product.findOne({_id: _id})
    
    if(!result){
      return NoContent(res)
    }

    return Success(res, result);
  } catch (error) {
    console.log(error);
    return InternalServerError(res);
  }
};
