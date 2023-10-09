const log = console.log;

// 제네레이터/이터레이터
// - 제네레이터 : 이터레이터이자 이터러블을 생성하는 함수

function* gen() {
    yield 1;
    if (!false) yield 2;
    yield 3;
    return 100;
}

let iter = gen();
log(iter[Symbol.iterator]() == iter);

for (const a of iter) log(a);

// 이 제네레이터라는 문장을 통해 순회할 수 있는 값을 만들 수 있다는 이야기는 어떠한 값도 순회할 수 있는 형태로 이 Generator라는 문장을 통해 조작할 수 있으며
// Generator를 통해서 굉장히 다양한 값들을 순회할 수 있는 iterable을 쉽게 프로그래머가 로직을 만들어가면서 순회를 시킬수 있다는 이야기다.
