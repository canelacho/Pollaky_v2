'use strict'

const projectModel = require('../models/project_model'),
      userModel = require('../models/user_model'),
      definitions = require('../models/definitions').definitions,
	    ControllerProject =  () => {}

      // Load al user for the select box
      definitions.userList = userModel.getAll( (docs) => {
          definitions.userList = docs
      })

var FormateDate = (date) => {
  // Formating the file date to a comprehensive date
  let month = date.getMonth()<10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1), 
      day = date.getDate()<10 ? '0'+(date.getDate()+1) : (date.getDate()+1),
      year = date.getFullYear(),
      newDateFormated = year + '-' + month + '-' + day

  return newDateFormated
}

ControllerProject.getAll = (req, res, next) => {
  console.log('req.query.msg')
  console.log(req.query.msg)
  if(req.query.msg == 'cls') {
    definitions.msg = ''
  }
  
  projectModel.getAll((docs) => {
    
    definitions.title = "Dasboard"
    definitions.docs = docs

    res.render('app/dashboard', definitions)
  })
}


ControllerProject.add = (req, res, next) => {
  // Assign title on page
  definitions.title = "New Project"

    res.render('app/project-add-form', definitions)
}


ControllerProject.save = (req, res, next) => {

  let project_first_contact = req.body.project_first_contact
  console.log(project_first_contact)
  //console.log('fecha: ' + FormateDate(project_first_contact))

  let project = {
    name               : req.body.project_name,
    incharge           : req.body.project_in_charge,
    firstContact       : req.body.project_first_contact,
    address            : req.body.project_address,
    zipcode            : req.body.project_zip_code,
    country            : req.body.project_country,
    state              : req.body.project_state,
    city               : req.body.project_city,
    contacts           : [{ contactName  : req.body.project_contact_name,
                            contactEmail : req.body.project_contact_email,
                            contactPhone : req.body.project_contact_phone,
                            contactTitle : req.body.project_contact_title
                         }],
    observations       : req.body.project_observations,
    status             : '1',  // Initial contact by default at firs time
    avaliable          : true,      // true by default at firs time
    quantityDevices    : 0          // Cero by default at firs time
  }
  definitions.msg = 'Project Successful SAVED'

  projectModel.save(project, ()=>{
    res.redirect('/app/dashboard')
  })
}

ControllerProject.getOne = (req, res, next) => {

  const project_id = req.params.project_id
  
  projectModel.getOne(project_id, (doc) => {
    const locals = {
      title : "Select Project",
      data : doc
    }
    res.send(locals)
  })
}

ControllerProject.projecDetails = (req, res, next) => {
  const project_id = req.params.project_id
  
  projectModel.getOne(project_id, (doc) => {
    console.log(doc)

    definitions.title = "Project Details"
    definitions.doc = doc

    res.render('app/project-details', definitions)
  })
}

ControllerProject.editForm = (req, res, next) => {

  const project_id = req.params.project_id
  // Assign title on page
  definitions.title = 'Edit Project'

  projectModel.getOne(project_id, (doc) => {
    definitions.doc = doc
    // Edit mask of date for a good read on datapicker
    definitions.firstContact = FormateDate(definitions.doc.firstContact)
  
    res.render('app/project-edit-form', definitions)
  })
}

ControllerProject.update = (req, res, next) => {
  // Get all values of the project selected
  let project = {
    id                 : req.params.project_id,
    name               : req.body.project_name,
    in_charge          : req.body.project_in_charge,
    first_contact      : req.body.project_first_contact,
    address            : req.body.project_address,
    zip_code           : req.body.project_zip_code,
    country            : req.body.project_country,
    state              : req.body.project_state,
    city               : req.body.project_city,
    contacts           : [{ contact_name  : req.body.project_contact_name,
                            contact_email : req.body.project_contact_email,
                            contact_phone : req.body.project_contact_phone,
                            contact_title: req.body.project_contact_title
                         }],
    observations       : req.body.project_observations,
    status             : req.body.project_status,
    avaliability       : req.body.project_avaliability
  }
  definitions.msg = 'Project Successful UPDATED'

  projectModel.update(project, (doc)=> {
    res.redirect('/app/dashboard')
  })
  
}

ControllerProject.delete = (req, res, next) => {
  var project_id = req.params.project_id
  definitions.msg = 'Project Successful DELETED'
  
  projectModel.delete(project_id, ()=>{
    res.redirect('/app/dashboard')
  })
}

ControllerProject.workWithProject = (req, res, next) => {
  const project_id = req.params.project_id
  
  projectModel.getOne(project_id, (doc) => {

    definitions.title = "Project Selected"
    definitions.doc = doc
    res.render('app/project-selected', definitions)
  })

}


ControllerProject.about = (req, res, next) => {
    res.render('app/about', definitions)
}


module.exports = ControllerProject