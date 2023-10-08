const log = console.log;

log('Arr -------');
const arr = [1, 2, 3];
for(const a of arr) log(a);

// Set을 통해 알아보기
// Set은 ES6에서 추가된 내장 객체로, 중복되지 않는 값을 저장하는 자료구조입니다. Set 객체는 add, delete, has, clear 등의 메소드를 제공하며, for...of 루프를 통해 요소를 순회할 수 있습니다. Set 객체는 배열과 유사하지만, 배열은 순서가 있고 중복된 값을 허용하는 반면, Set은 순서가 없고 중복된 값을 허용하

log('Set -------');
const set = new Set([1,2,3]);
for(const a of set) log(a);

// Map을 통해 알아보기
log('Map --------');
const map = new Map([['a',1],['b',2],['c',3]]);
for(const a of map) log(a);




// 이터러블/이터레이터 프로토콜
// - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값.
// - 이터레이터: { value, done (키에 해당하는 값을) } 객체를 리턴하는 next(); 를 가진 값.
// - 이터러블/이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약
8.33 