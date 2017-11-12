'use sctrict'

const userModel = require('../models/user_model'),
      definitions = require('../models/definitions').definitions,
      ControllerUser = () => {}

ControllerUser.getAll = (req, res, next) => {
  userModel.getAll( (docs) => {
  	const locals = {
  		title : "Users List",
  		data : docs
  	}
  	res.send(locals)
  })
}

module.exports = ControllerUser