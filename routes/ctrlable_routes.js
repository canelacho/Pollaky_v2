'use strict'

const express = require('express'),
			router = express.Router(),
			definitions = {
				styles			 : '/css/style.css', 
				bootstrapcss : '/css/bootstrap.min.css',
				jquery			 : '/js/jquery.min.js',
				tether			 : '/js/tether.min.js',
				bootstrapjs	 : '/js/bootstrap.min.js',
				project_name : 'Pollaky - Ver 0.1.0',
				title				 : 'Login'
			}

router
	.get('/', (req, res, next) => {
		res.render('index', definitions)
	})

module.exports = router