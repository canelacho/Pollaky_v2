'use strict'

const userModel = require('./user_schema.js'),
 	User = ()=>{}

User.getAll = (cb) => {
	userModel
		.find({})
		.exec((err, docs) => {
			if(err) throw err
			cb(docs)
		})
}

module.exports = User