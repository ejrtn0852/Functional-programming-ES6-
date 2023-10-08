// 기존과 달라진 ES6에서의 리스트 순회
// - for 1++
// - for of
const log = console.log;
// 기존 Es5 에서의 리스트 순회

const list = [1,2,3];
for (var i = 0; i < list.length; i++) {
    log(list[i]);
}

const str = "abc";
for (var i = 0; i < str.length; i++) {
    log(str[i]);
}

// list라는 혹은 array라는 값에 lenght라는 property에 의존해서 숫자라는 key로 해당하는 내부의 값을 숫자라는 key로 순회하도록 i를 증가시켜주면서 length만큼 숫자 key로 접근해서 list 안에있는 값을 순회하는 식으로 사용

// ES6 방식의 순회

for (const a of str) {
    log(a);
}
// 직관적이고 간결해짐

