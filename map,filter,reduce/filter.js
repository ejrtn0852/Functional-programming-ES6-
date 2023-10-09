const products = [
    { name: "반팔티", price: 15000 },
    { name: "긴팔티", price: 20000 },
    { name: "핸드폰 케이스", price: 15000 },
    { name: "후드티", price: 30000 },
    { name: "바지", price: 25000 },
];

// 명령형 코드
const under20000 = [];
for (const p of products) {
    if (p.price < 20000) under20000.push(p);
}
log(under20000);

const filter = (fn, iter) => {
    let res = [];
    for (const p of iter) {
        if (fn(p)) res.push(p);
    }
    return res;
};

log(...filter((p) => p.price < 20000, products));
log(
    filter(
        (n) => n % 2,
        (function* () {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        })()
    )
);
