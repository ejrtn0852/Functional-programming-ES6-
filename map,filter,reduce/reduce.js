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
        // iter.next().value를 하게되면 acc에 할당되는 값은 iter의 첫 번째 값을 제외한 나머지 값이 들어간다
        console.log(`acc의 값이 뭘로 들어오니? : ${acc}`);
        // 실제로 콘솔을 찍어보면 a의 값은 0이 들어온다. (초기 값)
    }
    for (const a of iter) {
        log(a); //
        acc = f(acc, a);
        // 들어오는 조건식을 함수에 위임한다. 여태까지 함수형 프로그래밍 강의를 들으면서 함수가 위임한다는건 함수를  조건문처럼 바꿔서 쓸 수 있는게 장점인것같다.
        // 결국 f(acc,a) => acc + a.price 와 같이 함수에서 어떤 조건을 만들어서 리턴 시키면 결국 이 값은 acc + a.price가 되는것과 같다.
    }
    return acc;
};

log(
    reduce((total_price, products) => total_price + products.price, 0, products)
);
// 상품의 가격의 총합을 구할 때 쓸모있어보임.
