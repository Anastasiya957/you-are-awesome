// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
	return property;
};

const createNotEnumerableProperty = (property) => {
	return Symbol(property);
};

const createProtoMagicObject = () => {
	function MagicObj() {};
	MagicObj.prototype = MagicObj.__proto__;
	return MagicObj;
};

let count = 0; 
const incrementor = () => {
	count++; 
	function counter() {
		count++;
		return counter;
	}
	counter.valueOf = function() {
		return count;
	}
	return counter;
};

const asyncIncrementor = () => {
	let count = 0;
	let promise = new Promise((resolve) => {
        count++;
        return resolve(count);
    });
    return promise;
};

const createIncrementer = () => {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (!this.current) {
                this.current = 1;
            }
            return {
                done: false,
                value: this.current++
            }
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => {
	let promise = new Promise(function(resolve) {
        setTimeout(() => {
	        return resolve(value);
	    }, 1100);
    });
    return promise;
};

const getDeepPropertiesCount = (obj) => {
	let keys = 0;
    function countKeys(obj) {
        for(let i in obj) {
            if(typeof(obj[i]) === 'object'){
                countKeys(obj[i]);
            }
            keys++;
        }
        return keys;
    }
    return countKeys(obj);
};

const createSerializedObject = () => {
	return new String();
};

const toBuffer = () => {};

const sortByProto = (array) => {
	return array.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;