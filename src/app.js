"use strict";
// nice function that will print things to the console div
// good for looking at what you are doing.
console.log = (function (old_function, div_log) {
    return function (text) {
        old_function(text);
        div_log.innerHTML += text;
    };
} (console.log.bind(console), document.getElementById("console")));

let x = (i) => i*2;

console.log( {a: 'alpha'} );
