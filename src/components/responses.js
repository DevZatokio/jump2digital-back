const config = require('../configs/responses');

function send(_res, status, body, headers) {
  try {
    let data = body;
    if (!body) {
      data = { status: status };
    }

    return _res.status(status, Object.assign({}, config.default.headers, headers)).json(data).send();
  } catch (error) {
    _res.end();
  }
}
class Responses {
  /**
   * Creates an instance of Ok (200) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof Ok
   */
  Success(res, body, headers) {
    return send(res, 200, body, headers);
  }
  /**
   * Creates an instance of Created (201) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof Created
   */
  Created(res, body, headers) {
    return send(res, 201, body, headers);
  }
  /**
   * Creates an instance of NoContent (204) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof NoContent
   */
  NoContent(res, body, headers) {
    return send(res, 204, body, headers);
  }
  /**
   * Creates an instance of BadRequest (400) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof BadRequest
   */
  BadRequest(res, body, headers) {
    return send(res, 400, body, headers);
  }
  /**
   * Creates an instance of Unauthorized (401) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof Unauthorized
   */
  Unauthorized(res, body, headers) {
    return send(res, 401, body, headers);
  }
  /**
   * Creates an instance of Forbidden (403) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof Forbidden
   */
  Forbidden(res, body, headers) {
    return send(res, 403, body, headers);
  }
  /**
   * Creates an instance of Not Acceptable (406) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof Forbidden
   */
  NotAcceptable(res, body, headers) {
    return send(res, 406, body, headers);
  }
  /**
   * Creates an instance of Conflict (409) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof Conflict
   */
  Conflict(res, body, headers) {
    return send(res, 409, body, headers);
  }
  /**
   * Creates an instance of PreconditionFailed (412) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof PreconditionFailed
   */
  PreconditionFailed(res, body, headers) {
    return send(res, 412, body, headers);
  }
  /**
   * Creates an instance of InternalServerError (500) Response.
   * @param {Responses} res
   * @param {Mixed} body The body to be stringified as JSON.
   * @param {Object} headers Headers to send.
   *
   * @memberof InternalServerError
   */
  InternalServerError(res, body, headers) {
    return send(res, 500, body, headers);
  }
}

module.exports = new Responses();
