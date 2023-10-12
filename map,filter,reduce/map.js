const log = console.log;

const products = [
    { name: "반팔티", price: 15000 },
    { name: "긴팔티", price: 20000 },
    { name: "핸드폰 케이스", price: 15000 },
    { name: "후드티", price: 30000 },
    { name: "바지", price: 25000 },
];
const map = (f, iter) => {
    // 반복문을 돌린 객체의 값을 배열에 담아 리턴한다.
    let res = [];
    for (const a of iter) {
        res.push(f(a));
        // 배열에 푸쉬되는 조건을 함수에 위임한다.
        // 명령형 코드에서는 정적으로 코드가 완성된다면 함수를 위임한 코드는 동적으로 바뀐것 같다.
        // f(a) => a.price  === res.push(a.price)
    }
    return res;
};
// result =>  return (5) ['반팔티', '긴팔티', '핸드폰 케이스', '후드티', '바지']
// 함수형 프로그래밍에서는 함수가 인자와 리턴값으로 소통하는 방식을 권장한다. 그래서 names를 어떤 직접적인 변화를 일으키는 다른 메서드나 함수에 보내는것이 아니라 결과를 return해서 값을 이후에 어떤 변화를 일으킨다거나 하는데 사용한다.

let names = [];
for (const a of products) {
    names.push(a.name);
}

log(map((a) => a.name, products));

let price = [];
for (const p of products) {
    price.push(p.price);
}

log(map((p) => p.price, products));

// 이터러블 프로토콜을 따른 map의 다형성 1

log([1, 2, 3].map((a) => a + 1)); // [2,3,4];

log(document.querySelectorAll("*").map((el) => el.nodeName)); // -> map is not a function

const it = document.querySelectorAll("*")[Symbol.iterator]();

function* gen() {
    yield 2;
    yield 3;
    yield 4;
}
log(map((a) => a * a, gen()));

// 이터러블 프로토콜을 따른 map의 다형성 2

let m = new Map();
m.set("a", 10);
m.set("b", 20);
map(new Map(([key, value]) => [k, value * 2], m));
