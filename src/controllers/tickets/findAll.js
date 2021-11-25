const { InternalServerError, Success } = require('../../components/responses');
const db = require('../../components/database');
/**
 *
 * @param {Request} req request node
 * @param {Response} res response node
 * @returns Response JSON
 */
module.exports = async (req, res) => {
  try {
    const Ticket = db.model('ticket');

    const results = await Ticket.find()
   
    return Success(res, results);
  } catch (error) {
    console.log(error);
    return InternalServerError(res);
  }
};
