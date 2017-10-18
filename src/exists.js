var _ = require('lodash');

function exists(value) {
	if (value === true) {
		return true;
	}
	
	if (value === false) {
		return true;
	}

	if (value === 0) {
		return true;
	}
	
	if (value == null) {
		return false;
	}
	
	if (typeof value === undefined) {
		return false;
	}
	
	if (value.length === 0) {
		return false;
	}
	
	if (value.length > 0) {
		return true;
	}
	
	if (_.isObject(value)) {
		return !_.isEmpty(value)
	}
	
	if (value) {
		return true;
	}
	else {
		return false;
	}
}

_.mixin({'exists': exists})
