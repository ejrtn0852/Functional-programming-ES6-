const log = console.log;

const products = [
    { name: "반팔티", price: 15000 },
    { name: "긴팔티", price: 20000 },
    { name: "핸드폰 케이스", price: 15000 },
    { name: "후드티", price: 30000 },
    { name: "바지", price: 25000 },
];

const map = (fn, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(fn(a));
    }
    return res;
};

const filter = (fn, iter) => {
    let res = [];
    for (const p of iter) {
        if (fn(p)) res.push(p);
    }
    return res;
};

const reduce = (fn, acc, iter) => {
    if (!iter) {
        console.log("조건문이 실행됐습니다");
        iter = acc[Symbol.iterator]();
        console.log(iter.next().value);
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = fn(acc, a);
    }
    return acc;
};

const add = (a, b) => a + b;

// 이 코드는 함수 중첩이 좀 되어있기 떄문에 코드 읽을 때 불편하다 읽기 편한 코드로 바꿔보자.

log(
    reduce(
        add,
        map(
            (p) => p.price,
            filter((p) => p.price < 20000, products)
        )
    )
);

// args를 어떤 특정 함수로 축약해서 하나의 값으로 만들어가는 거라고 볼 수 있다. reduce와 유사.
const go = (...args) => reduce((a, f) => f(a), args);

// 함수 실행
go(
    0,
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100,
    log
);
/// 111

// 파이프 함수는 고 함수와 다르게 함수를 리턴하는 함수다. 고 함수는 즉시 함수들과 인자를 전달해서 즉시 어떤 값을 평가하는데 사용한다면
// 파이프 함수는 함수들이 나열되어 있는 합성된 함수를 만드는 함수다.
const pipe =
    (f, ...fs) =>
    (...a) =>
        go(f(...a), ...fs);
// pipe 함수는 함수를 리턴하는 함수다
// const f = pipe(
//     (a) => a + 1,
//     (a) => a + 10,
//     (a) => a + 100
// );
const f = pipe(
    (a, b) => a + b, // 1
    (a) => a + 10, // 11
    (a) => a + 100 // 111 -> f 변수의 값으로 할당된다.
);
log(f(0, 1));

// go 함수가 호출될 때, ...args 배열의 첫 번째 값이 undefined이면, iter 변수에 acc[Symbol.iterator]() 코드를 실행한 결과를 할당합니다. 이렇게 하면, iter 변수는 acc 배열의 이터레이터(iterator) 객체가 됩니다. 그리고 acc 변수에는 iter.next().value 코드를 실행한 결과를 할당합니다. 이렇게 하면, acc 변수는 iter 변수의 첫 번째 값을 가리키게 됩니다.

// 하지만, go(a, ...fs) 코드에서는 iter 변수가 전혀 사용되지 않기 때문에, iter 변수가 undefined 값으로 유지됩니다. 따라서, reduce 함수에서 iter 변수가 undefined 값으로 전달되면, iter[Symbol.iterator]() 코드를 실행할 수 없기 때문에, TypeError가 발생합니다. 이러한 문제를 해결하기 위해서는, go 함수를 호출할 때, iter 변수에 이터러블(iterable) 객체를 전달해야 합니다.
