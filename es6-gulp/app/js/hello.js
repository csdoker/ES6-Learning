'use strict';

//hello.es6

function greet(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('hello ' + name);
        }, 1000);
    });
}

exports.greet = greet;