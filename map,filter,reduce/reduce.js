const log = console.log;

const products = [
    { name: "반팔티", price: 15000 },
    { name: "긴팔티", price: 20000 },
    { name: "핸드폰 케이스", price: 15000 },
    { name: "후드티", price: 30000 },
    { name: "바지", price: 25000 },
];

const nums = [1, 2, 3, 4, 5];

// 계속해서 순회하면서 하나의 값으로 누적해 나갈 때 이런 코드와 이런 패턴을 사용하게 된다.
let total = 0;
for (const n of nums) {
    total = total + n;
}
log(total);

const reduce = (f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
        console.log(`acc의 값이 뭘로 들어오니? : ${acc}`);
    }
    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
};

log(
    reduce((total_price, products) => total_price + products.price, 0, products)
);
// 상품의 가격의 총합을 구할 때 쓸모있어보임.
