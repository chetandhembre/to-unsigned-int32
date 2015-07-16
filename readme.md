[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

convert number to 32 bit buffer (size 8 byte).

Currently only support [big endian](https://en.wikipedia.org/wiki/Endianness#Big-endian).

also checkout [from-unsigned-int32](https://github.com/chetandhembre/from-unsigned-int32).


## Install

```
npm i to-unsigned-int32
```
## API

1. #####Async API

	```js
	var toUInt32 = require('to-unsigned-int32')

	toUInt32(12, function (err, res) {
		console.log(res) //<Buffer 00 00 00 0c>
	})

	```

	`n` can be number in any base.

	`callback` get two arguments:

	  * An error object.
	  * Buffer with length of 4.

2. #####Sync API

	```js
	var toUInt32 = require('to-unsigned-int32')

	console.log(toUInt32.toUInt32Sync(12)) //<Buffer 00 00 00 0c>

	```

	`n` can be number in any base.

	returns buffer with length 4.

## licence

MIT
