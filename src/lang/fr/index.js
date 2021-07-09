const asDictionary = require('../asDictionary');

const words = Object.assign({}, 
	require('./leagues'), 
	require('./teams'),
);

module.exports = asDictionary(words);