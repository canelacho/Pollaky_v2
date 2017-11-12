'use strict'

const express = require('express'),
	  	appRouter = express.Router(),
	  	ControllerProject = require('../controllers/project_controller'),
	  	ControllerUser = require('../controllers/user_controller')

appRouter

	.get('/dashboard', ControllerProject.getAll)

	.get('/add-project-form', ControllerProject.add)
	.get('/view-project/:project_id', ControllerProject.projecDetails)
	.get('/edit-project-form/:project_id', ControllerProject.editForm)
	.get('/work-with-me/:project_id', ControllerProject.workWithProject)

	.get('/project/:project_id', ControllerProject.getOne)
	.post('/project', ControllerProject.save)
	.put('/project/:project_id', ControllerProject.update)
	.delete('/project/:project_id', ControllerProject.delete)

	.get('/user-list', ControllerUser.getAll)

	.get('/about', ControllerProject.about)


module.exports = appRouter