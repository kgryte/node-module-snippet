'use strict';

var mkdirp = require( 'mkdirp' ),
	path = require( 'path' ),
	cp = require( './../lib' );

var dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

mkdirp.sync( dirpath );
cp.sync( dirpath, {
	'template': 'default',
	'filename': 'foo.js',
	'desc': 'Returns a beep boop.',
	'name': 'beepBoop'
});

