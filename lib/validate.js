'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isString = require( 'validate.io-string-primitive' ),
	contains = require( 'validate.io-contains' ),
	templates = require( './templates.js' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object
* @param {Object} options - function options
* @param {String} [options.template] - template name
* @param {String} [options.title] - title
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'template' ) ) {
		opts.template = options.template;
		if ( !isString( opts.template ) ) {
			return new TypeError( 'invalid option. Template option must be a string primitive. Option: `' + opts.template + '`.' );
		}
		if ( !contains( templates, opts.template ) ) {
			return new Error( 'invalid option. Unrecognized template name. Must be one of [' + templates.join( ',' ) + '] Option: `' + opts.template + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'filename' ) ) {
		opts.filename = options.filename;
		if ( !isString( opts.filename ) ) {
			return new TypeError( 'invalid option. Filename option must be a string primitive. Option: `' + opts.filename + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'name' ) ) {
		opts.name = options.name;
		if ( !isString( opts.name ) ) {
			return new TypeError( 'invalid option. Name option must be a string primitive. Option: `' + opts.name + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'desc' ) ) {
		opts.desc = options.desc;
		if ( !isString( opts.desc ) ) {
			return new TypeError( 'invalid option. Description option must be a string primitive. Option: `' + opts.desc + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
