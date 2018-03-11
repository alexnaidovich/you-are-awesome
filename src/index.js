// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => prop;

const createNotEnumerableProperty = (prop) => {
  Object.defineProperty(Object.prototype, prop, { value: 'value', enumerable: false });
  return prop;  
};
const createProtoMagicObject = () => {
  let magic = () => {};
  magic.prototype = magic.__proto__;
  return magic;
};

Function.prototype.valueOf = () => i;
let i = 0;
const incrementor = () => {
  i++;
  return incrementor;
};

let j = 0;
const asyncIncrementor = () => new Promise((resolve) => {
  j++;
  return resolve(j);
});


const createIncrementer = () => {
  function* incr() {
    for (let i = 1; i <10; i++)
    {yield i;}
  };
  return incr();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => new Promise((resolve) => {
    setTimeout(() => resolve(param), 1100);
  });

const getDeepPropertiesCount = (obj) => {
  let k = 0;
  let counter = (obj) => {
    for (let keys in obj) {
      if (typeof obj[keys] === "object") {
        counter(obj[keys]);
      }
      k++;
    }
    return k;
  }
  return counter(obj);
};

const createSerializedObject = () => {
  let obj = null;
  return obj;
};

const sortByProto = (arr) => {
  const check = arr.filter(prot => prot.__proto__);
  return check.sort((a, b) => a - b);
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