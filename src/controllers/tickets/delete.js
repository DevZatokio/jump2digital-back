const { InternalServerError, PreconditionFailed, BadRequest, Success } = require('../../components/responses');
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

    const Ticket = db.model('ticket');

    const raw = await Ticket.deleteOne({
      _id: _id,
    });

    if (!raw || raw.deletedCount == 0) {
      return BadRequest(res);
    }

    return Success(res);
  } catch (error) {
    return InternalServerError(res);
  }
};
