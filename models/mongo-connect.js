'use sctric'

const mongoose = require('mongoose'),
	  conf = require('./db-conf.json').mongoDB

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://'+conf.host+'/'+conf.database, { useMongoClient:true})

module.exports = mongoose