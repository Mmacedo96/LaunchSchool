function foo(bar) {
    return bar;
}

function oneGreen(twoBlue) {
    return twoBlue + " foo";
}

var x = foo("bar");
console.log(x + " and foo");
console.log("foo and" + x);
console.log(x);
console.log(oneGreen("bar"));