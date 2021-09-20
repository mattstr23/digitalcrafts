// Write a function to return the maximum occurring character in the input string e.g., if input string is "Test" then function should return 't'.
// Note: capital letter 'T' and small letter 't' should count as the same.

// str1 = "holddogecoinkek"
// result: o
// str2 = "aahhanotheralgo"
// result: a
// str3 = "randywhyyyyy"
// // result: y

// tester = "aaAAatttt"

// function getHighestChar(str) {
//     tester = "aaAAatttt"
//     str = str.toLowerCase()
//     const alphCount = {};
//     let max = 0;
//     let maxChar = "";

//     for(let char of str){
//         if(alphCount[char]) {
//             alphCount[char]++;
//         } else {
//             alphCount[char] = 1;
//         }
//         console.log(char)
//     }
//     for(let char in alphCount) {
//         if(alphCount[char] > max) {
//             max = alphCount[char];
//             maxChar = char;
//         }
//     }
//     console.log(`Most used character is: ${maxChar}`);
// }
// getHighestChar(tester)

//  Given an array of numbers and a stand alone number, return all combinations of numbers in the array that add up to the stand alone number.

// let array = [2,5,8,3,-2,9,0]
// let targetSum = 3
// Result: [ 5, -2 ], [ 3, 0 ], [ -2, 5 ], [ 0, 3 ]



// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// For example, if N = 8, the function should return the number '21' which is the 8th index of the Fibonacci sequence

//N = 8
// result: 21

const getFib = (num) => {
    const array = [0,1]
    for(let i = 2; i < num; i++) {
        a = array[i-1]
        b = array[i-2]
        array.push(a+b)
    }
    return array
}
console.log(getFib(8))