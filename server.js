'use strict'

const app = require('./app')

const server = app.listen(app.get('port'), () => {
	console.log('Starting express server on port ' + app.get('port') )
}) 