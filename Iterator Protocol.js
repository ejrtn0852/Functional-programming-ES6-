const log = console.log;

log("Arr -------");
const arr = [1, 2, 3];
for (const a of arr) log(a);

// Set을 통해 알아보기
// Set은 ES6에서 추가된 내장 객체로, 중복되지 않는 값을 저장하는 자료구조입니다. Set 객체는 add, delete, has, clear 등의 메소드를 제공하며, for...of 루프를 통해 요소를 순회할 수 있습니다. Set 객체는 배열과 유사하지만, 배열은 순서가 있고 중복된 값을 허용하는 반면, Set은 순서가 없고 중복된 값을 허용하

log("Set -------");
const set = new Set([1, 2, 3]);
for (const a of set) log(a);

// Map을 통해 알아보기
log("Map --------");
const map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]);
for (const a of map) log(a);
for (const a of map.keys()) log(a); // a,b,c ( key 값만 도출 )
for (const a of map.values()) log(a); // 1,2,3 ( value 값만 도출 )
for (const a of map.entries()) log(a); // 전체 도출 ["a",1], ["b",2], ["c",3]

// 이터러블/이터레이터 프로토콜
// - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값.
// - 이터레이터: { value, done (키에 해당하는 값을) } 객체를 리턴하는 next(); 를 가진 값. --> 이터레이터는 반복문을 사용할 수 있는 자료구조를 뜻함
// - 이터러블/이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약
8.33;

// - 반복문이 실행되는 과정
// const arr = [1, 2, 3];
// let iterator =  arr[Symbol.iterator]();
// iterator.next(); ->
// { value 1, done: false },{value 2, done: false },{value 3, done: false },{ value undefined, done: true }
// array, set, map 등 똑같이 작용한다. done이 false면 반복문을 빠져나오도록 설계 되어있다.

// 사용자 정의 이터러블을 통해 알아보기

// 이터러블 값은 심볼 이터레이터 메서드를 구현하고 있어야한다 이 메서드는 이터레이터를 반환해야한다  이터레이터는 next를 메서드로 가지고있으며 next는 value,done을 가지고 있는 객체를 반환해야한다.
const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i == 0 ? { done: true } : { value: i--, done: false };
            },
            [Symbol.iterator]() {
                return this;
            },
        };
    },
};

let iterator = iterable[Symbol.iterator]();
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
// for (const a of iterable) log(a); // 위 array 순회와 같은 결괏괎 도출

// 잘 구현된 이터러블은 이터레이터를 만들었을 때 이터레이터를 진행하다가 순회를 할 수도 있고 이터레이터를 for of문에 넣었을 때 모든 값들을 순회할 수 있도록 되어있는걸 뜻한다.
const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();
log(iter2[Symbol.iterator]() == iter2);
for (const a of arr2) log(a);
