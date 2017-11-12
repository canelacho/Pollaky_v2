'use strict'

const express = require('express'),
	path = require('path'),
	favicon = require('serve-favicon'),
	bodyParser = require('body-parser'),
	logger = require('morgan'),
	restFul = require('express-method-override')('_method'),
	routes = require('./routes/ctrlable_routes'),
	appRoutes = require('./routes/app_routes'),
	faviconURL = __dirname + '/public/img/ctrlable_ico.ico',
	publicDir = express.static(path.join(__dirname,'public')),
	viewDir = path.join(__dirname,'views'),
	port = (process.env.PORT || 3000),
	definitions = require('./models/definitions'),
	app = express()

	app.set('views', viewDir)
	app.set('view engine', 'pug')
	app.set('port', port)

	app.use(favicon(faviconURL))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended:false}))
	app.use(restFul)
	app.use(logger('dev'))
	app.use(publicDir)
	app.use(routes)
	app.use('/app', appRoutes)


	module.exports = app