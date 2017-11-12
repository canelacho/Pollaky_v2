'use strict'

const mongoose = require('./mongo-connect.js'),
	Schema = mongoose.Schema,
	projectSchema = new Schema({
    name      		 		 : {type: String, required: false},
    incharge 					 : {type: String, required: false},
    firstContact 			 : {type: Date},
    address            : {type: String, required: false},
    zipcode            : {type: String, required: false},
    country            : {type: String, required: false},
    state              : {type: String, required: false},
    city               : {type: String, required: false},
    contacts           : [],
    createdData 			 : {type: Date, default: Date.now},
    observations 			 : {type: String, required: false},
    status 			       : {type: String, required: false},
    avaliable 			   : {type: Boolean},
    quantityDevices		 : {type: Number},
    devices 					 : []
  },
  { 
    collection : 'projects',
    versionKey: false
  }),
  Project = mongoose.model('Projects',projectSchema)
	  
module.exports = Project