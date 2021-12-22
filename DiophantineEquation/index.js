"use strict";
/*
    https://www.codewars.com/kata/554f76dca89983cc400000bb/train/typescript
    In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns,
    such that only the integer solutions are sought or studied.

    In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions
    of a diophantine equation of the form:

    x2 - 4 * y2 = n
    (where the unknowns are x and y, and n is a given positive number)
    in decreasing order of the positive xi.

    If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

    Examples:
    solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
    solEquaStr(90002) --> "[]"
    Hint:
    x2 - 4 * y2 = (x - 2*y) * (x + 2*y)
*/

const solequa = n => {
    const arr = [];
    for (let i = n; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            (i - 2 * j) * (i + 2 * j) === n ? arr.push([i, j]) : null;
        }
    }
    return arr;
};

console.log(solequa(12));

/*
    solequa(5), [[3, 1]]
    solequa(12), [[4, 1]]
    solequa(13), [[7, 3]]
    solequa(16), [[4, 0]]
*/