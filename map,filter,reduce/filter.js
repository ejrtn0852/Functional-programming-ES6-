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

// 함수형 코드
const filter = (fn, iter) => {
    let res = [];
    // 배열에 이터러블 값이 들어온다
    for (const p of iter) {
        if (fn(p)) res.push(p);
        // 들어오는 조건식을 함수에 위임한다. ex => if((p)=> p.price < 20000)
        // const price = (p) => p.price < 20000 즉 리턴되는 값이 조건문의 조건식이 형성된다. // 자스에서 함수는 일급객체라 값으로 쓰일 수 있다.
        // fn(p) === price(p)
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
