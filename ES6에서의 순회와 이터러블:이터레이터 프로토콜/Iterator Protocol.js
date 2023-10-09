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
                return this; // 자기자신 또한 이터러블이면서 심볼 이터레이터를 실행했을 때 자기 자신을 리턴하도록 해서 계쏙해서 For of문 같은곳에 들어간다거나 어디서든 이터레이터로 만들었을 때 계속해서 Next를 호출할 수 있게 만드는게 well-formed-iterator 다
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

for (const a of document.querySelector("*")) log(a);
const all = document.querySelector("*");
log(all[Symbol.iterator]());

// 코파일럿
// 객체를 반복문으로 쓸 수 있는 이유는?
// 코파일럿 : 객체를 반복문으로 사용할 수 있는 이유는, 객체가 이터러블 프로토콜을 따르기 때문입니다. 이터러블 프로토콜은 Symbol.iterator 메소드를 가지고 있어야 하며, 이 메소드를 호출하면 이터레이터 객체를 반환해야 합니다. 이터레이터 객체는 next() 메소드를 가지고 있어서 순회할 수 있습니다. 객체는 이터러블 프로토콜을 따르지 않지만, Object.keys(), Object.values(), Object.entries()와 같은 메소드를 사용하여 이터러블 객체로 변환할 수 있습니다. 이러한 메소드를 사용하면 객체를 반복문으로 순회할 수 있습니다.

// ES6 이전에 객체에서 반복문을 사용할 수 있던 이유는?
// ES6 이전에 객체에서 반복문을 사용할 수 있던 이유는, 객체가 for...in 루프를 지원했기 때문입니다. for...in 루프는 객체의 프로퍼티를 순회할 수 있습니다. for...in 루프는 객체의 프로퍼티를 순회할 때, 프로토타입 체인 상의 모든 프로퍼티를 순회하므로 주의해야 합니다. 또한, for...in 루프는 순서가 보장되지 않습니다. ES6에서는 for...in 루프 대신 for...of 루프를 사용하여 이터러블 객체를 순회하는 것을 권장합니다.

// for ...in문의 로직은?
// for...in 루프는 객체의 프로퍼티를 순회하는 루프입니다. for...in 루프는 객체의 프로퍼티 이름을 순회하며, 각 프로퍼티 이름에 해당하는 값에 접근할 수 있습니다. for...in 루프는 다음과 같은 로직으로 동작합니다.
// 객체의 프로퍼티 이름을 순회합니다.
// 각 프로퍼티 이름에 해당하는 값에 접근합니다.
// 루프 본문을 실행합니다.
// 다음 프로퍼티 이름으로 이동합니다.
// 모든 프로퍼티를 순회할 때까지 1~4 단계를 반복합니다.
// for...in 루프는 객체의 프로퍼티를 순회할 때, 프로토타입 체인 상의 모든 프로퍼티를 순회하므로 주의해야 합니다. 또한, for...in 루프는 순서가 보장되지 않습니다. 따라서 for...in 루프는 배열을 순회하는 데에는 적합하지 않습니다.

// Object.keys() 메소드는 ES5에 추가되었다 그전에 객체를 반복문으로 순회하는 경우는 객체를 배열의 요소로 반환해서 배열을 반복문을 돌리는건 가능하지만 객체 자체를 반복문을 돌리는건 불가능하다 지금도 이 조건이 똑같이 요구된다 단, 사용하기 용이한 메소드들이 대거 추가됨가 동시에 객체에서도 순회하기 편한 반복문,메소드들이 추가되어서 보다 안전하고 편리하게 순회 할 수 있고 이터러블/이터레이터 프로토콜을 따르면서 표준화 되었다
