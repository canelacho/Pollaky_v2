'use strict'

var projectModel = require('./project-schema.js'),
	Project = ()=>{}

Project.getAll = (cb) => {
	projectModel
		.find({})
		.exec((err, docs) => {
			if(err) throw err
			cb(docs)
		})
}

Project.getOne = (project_id, cb) => {
	projectModel
		.findOne({_id:project_id})
		.exec((err, doc) => {
			if(err) throw err
			cb(doc)
		})
}

Project.save = (docs, cb) => {
	console.log(docs)
	projectModel
		.create(docs,(err)=>{
			if(err) throw err
			cb()
		})
}

Project.update = (doc, cb) => {

	projectModel.findOneAndUpdate(
		{_id:doc.id},
		{
		    name               : doc.name,
		    incharge           : doc.in_charge,
		    firstContact       : doc.first_contact,
		    address            : doc.address,
		    zipcode            : doc.zip_code,
		    country            : doc.country,
		    state              : doc.state,
		    city               : doc.city,
		    contacts					 : { contactName  : doc.contacts[0].contact_name,
		    											 contactEmail : doc.contacts[0].contact_email,
		    											 contactPhone : doc.contacts[0].contact_phone,
		    											 contactTitle : doc.contacts[0].contact_title
		    										 },
		    observations       : doc.observations,
		    status             : doc.status,
		    avaliability       : doc.avaliability
		},
		function(err) {
			if(err) throw err
			cb()
		}
	)
}

Project.delete = (project_id, cb) => {
	projectModel.remove({_id:project_id}, (err, docs)=>{
		if(err) throw err
		cb()
	})
}

module.exports = Project