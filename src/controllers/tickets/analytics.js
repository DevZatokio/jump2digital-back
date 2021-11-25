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
    const Ticket = db.model('ticket');

    const data = {
      total_products_sold: 0,
      total_products_by_type: [],
      total_tickets_visa: 0,
      total_tickets_mastercard: 0,
    }

    // total products sold
    const [queryTotalProductsSold] = await Ticket.aggregate([
      {
        $group:
          {
            _id: '',
            amount: { $sum: "$amount" },
            count: { $sum: 1 }
          }
      }
    ])
    

    data.total_products_sold = queryTotalProductsSold && queryTotalProductsSold.amount ?  queryTotalProductsSold.amount:0;

    // total products by type

    const queryTotalProductsByType = await Ticket.aggregate([
      {
        $lookup:{
          from: 'products',
          localField: 'productId',
          foreignField: '_id',
          as: 'product'
        }
      },
      {
        $project:{
          product:{
            $arrayElemAt: ['$product',0]
          },
          amount: 1,
          _id:1,
          productId:1
        }
      },
      {
        $group:
          {
            _id: '$product.description',
            amount: { $sum: "$amount" },
            count: { $sum: 1 }
          }
      }
    ])

    data.total_products_by_type  = queryTotalProductsByType && queryTotalProductsByType.length> 0 ? queryTotalProductsByType: []

    
    data.total_tickets_visa = await Ticket.countDocuments({paymentType: 'Visa'})
    data.total_tickets_mastercard = await Ticket.countDocuments({paymentType: 'Mastercard'})
   
    return Success(res, data);
  } catch (error) {
    console.log(error);
    return InternalServerError(res);
  }
};
