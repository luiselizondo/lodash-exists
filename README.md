# Lodash Exists
[![Build Status](https://travis-ci.org/luiselizondo/lodash-exists.svg?branch=master)](https://travis-ci.org/luiselizondo/lodash-exists)

Extends lodash to check if a value exists

### Example
```
var _ = require('lodash');
require('lodash-exists')

_.exists('') // false
_.exists(null) // false
_.exists(undefined) // false
_.exists(true) // true
_.exists(false) // true
_.exists('Some string') // true
_.exists(3) // true
```

