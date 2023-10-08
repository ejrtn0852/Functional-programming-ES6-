//  #고차 함수 
//  - 함수를 값으로 다루는 함수
const log = console.log;

const apply1 = f => f(1);
const add2 = a => a + 2;

log(apply1(add2));
// log(apply1(add2)); => 3;


// 함수와 숫자를 받아 숫자만큼 함수를 실행하는 함수
// 함수를 인자로 받아서 자기가 원하는 어떤 인자를 적용하는 함수 이걸 applycation 함수라고 한다/
const times = (f,n) => {
    let i = -1;
    while( ++i < n ) f(i);
}

times(log,3);
times(a => log (a+10),3);


// 함수를 만들어 리턴하는 함수  (클로저를 만들어 리턴하는 함수);
const addMaker = a => b => a+b;
addMaker(10);
// addMaker는 클로저를 리턴하는 함수  함수가 함수를 만들어서 리턴할때는 결국에는 클로저를 리턴하기위해 사용한다. 이런 유형의 함수가 고차함수라고 함

// 함수가 함수를 리턴함 
const addMak = (a) => {
    return anonymous = (b) => {
        return a+b;
    } 
}
// 클로저는 a를 기억하는 함수
log(addMak(10)(20));

