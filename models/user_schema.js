'use strict'

const mongoose = require('./mongo-connect.js'),
	Schema = mongoose.Schema,
	userSchema = new Schema({
		username 		: {type:String, required:true},
		password 		: {type:String, required:true},
		type 		 		: {type:String},
		dateCreated : {type:Date, default:Date.now}
	},
	{
		collection : 'users',
		versionKey : false
	}),
	User = mongoose.model('Users', userSchema)

module.exports = User