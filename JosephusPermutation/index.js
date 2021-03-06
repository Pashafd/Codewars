/*
    UNCOMPLITED
    https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript
    This problem takes its name by arguably the most important event in the life of the ancient historian 
    Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

    Refusing to surrender to the enemy, they instead opted for mass suicide, with a 
    twist: they formed a circle and proceeded to kill one man every three, until one last man was left 
    (and that it was supposed to kill himself to end the act).

    Well, Josephus and another man were the last two and, as we now know every detail of the story, 
    you may have correctly guessed that they didn't exactly follow through the original idea.

    You are now to create a function that returns a Josephus permutation, 
    taking as parameters the initial array/list of items to be permuted as if they were in a circle 
    and counted out every k places until none remained.

    Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

    For example, with n=7 and k=3 josephus(7,3) should act this way.
    [1,2,3,4,5,6,7] - initial sequence
    [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
    [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
    [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
    [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
    [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
    [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
    [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
*/

const getJosephus = ({ index, items, newItems, step }) => {
    if (items.length === 1) {
        return [...newItems, items[0]];
    }

    const curLength = items.length;
    const curItem = items[index];

    let newIndex = 0;
    if (index + step >= curLength) {
        newIndex = (index + step) % curLength;

        while (newIndex >= curLength - 1) {
            newIndex = curLength % newIndex;
        }
    } else {
        newIndex = index + step - 1;
    }

    return getJosephus({
        index: newIndex,
        items: [...items.slice(0, index), ...items.slice(index + 1)],
        newItems: [...newItems, curItem],
        step,
    });
};
const josephus = (items, k) =>
    items.length === 0 ? [] : getJosephus({ index: k - 1, items, newItems: [], step: k });

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));
