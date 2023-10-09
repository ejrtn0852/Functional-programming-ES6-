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
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = fn(acc, a);
    }
    return acc;
};

const add = (a, b) => a + b;

// 왼쪽에서부터 읽어나가면 된다.
log(
    reduce(
        add,
        map(
            (p) => p.price,
            filter((p) => p.price < 20000, products)
        )
    )
);
