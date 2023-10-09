const log = console.log;

function* odds(l) {
    for (let i = 0; i <= l; i++) {
        if (i % 2) yield i;
    }
}

let iter = odds(10);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

//
function* infinity(i = 0) {
    while (true) yield i++;
}

function* limit(l, iter) {
    for (const a of iter) {
        yield a;
        if (a == l) return;
    }
}

function* odd(l) {
    for (const a of infinity(1)) {
        if (a % 2) yield i;
        if (a == l) return;
    }
}

// for...of,spread operator, Destructuring,Rest operator
log(...odds(10));
log(...odds(10), ...odd(20));

const [head, ...tail] = odds(5);
log(head);
log(tail);
