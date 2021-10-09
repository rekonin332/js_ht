const Dictionary = require('./Dictionary');

var hello = 'Hello World!';
console.log(hello);

var d = new Dictionary();
d.add('test', 111);

console.log(d.find('test'));

// console.log(d);

function getValidPostion(searchLst, x, y) {
  let postionLst = [];
  let returnX;
  let returnY;

  returnX = x;
  returnY = y;

  postionLst.push(returnX);
  postionLst.push(returnY);
  return postionLst;
}

var ret = getValidPostion('ss', 1, 2222);
console.log(ret);

