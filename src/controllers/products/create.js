const { InternalServerError, PreconditionFailed, Created, BadRequest } = require('../../components/responses');
const db = require('../../components/database');
const {v4:uuidV4} = require('uuid')
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

    const Product = db.model('product');

    const data = {
      _id: uuidV4(),
      ...body,
    };

    const errors = new Product(data).validateSync();
    
    if (errors && errors.errors) {
      return BadRequest(res, errors);
    }

    const result = await Product.create(data);

    if (!result && !result._id) {
      return BadRequest(res);
    }

    return Created(res);
  } catch (error) {
    console.log(error);
    return InternalServerError(res);
  }
};
