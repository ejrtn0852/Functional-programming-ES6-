const a = [1, 2, 3];
a[Symbol.iterator] = null;
// Uncaught TypeError: a is not iterable
log([...a, ...[3, 4]]);

// 이터러블 포로토콜을 정확히 익히고 이터러블에 대한 추상을 정확히 다루면 자바스크립트에서 보다 값들을 잘 사용한 함수를 만들고 값들을 잘 다룰 수 있다.
