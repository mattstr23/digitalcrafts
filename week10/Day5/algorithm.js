// Anagrams are words or phrases that contain the same number of characters. Create a function that checks a set of two strings, and
// returns 'true' if they are anagrams and returns 'false' if they are not.

// string1 = "A gentleman";
// string2 = "Elegant man";
// string3 = "Clint Eastwood";
// string4 = "Old West action";
// string5 = "idontlikealgos";
// string6 = "algoverybad";

// function anagramFinder(str1,str2) {
//     const mapChar1 = stringSorter(str1);
//     const mapChar2 = stringSorter(str2);

//     if(Object.keys(mapChar1).length !== Object.keys(mapChar2).length) {
//         return false;
//     }

//     for (let char in mapChar1) {
//         if(mapChar1[char] !== mapChar2[char]){
//             return false;
//         }
//     }

//     return true;
// }
// function stringSorter(str) {
//     const sorter = {};

//     for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         sorter[char] = sorter[char] + 1 || 1;
//     }
//     return sorter;
// }
// console.log(anagramFinder(string5,string6))

// write a function that capitalizes the first character of every word in a string

// phrase1 = "randy doesnt like giving algos"
// phrase2 = "arent you glad its friday"
// phrase3 = "i wonder whats for lunch today"

// function wordCapper(str) {
//     return str.split(" ").map((word) => 
//     word.slice(0,1).toUpperCase() + word.slice(1)).join(" ")}

// console.log(wordCapper(phrase2))

//Write a function that finds the missing number in a given integer array

// let arr1 = [1,2,3,4,5,6,7,8,10];
// expect result: 9

// function missingNumber()

//For an array A consisting of N integers. I am looking to find the maximum K (from 0 to N − 1)
//such that there exists a pair of positions (i, j) satisfying K = |i − j| = |A[i] − A[j]|, 
//where |x| denotes absolute value of x. In other words, the distance between positions is equal to the difference between values.
//A position together with itself (when i = j) is always a valid pair for K = 0 (look at the third example).
//that, given an array A of N integers, returns the maximum possible K.
//Sample Input: A = [2, 2, 2, 1], 
//The function should return 1 as The furthest valid pair is A[2] = 2 and A[3] = 1, as 1 = |2 − 3| = |2 − 1|.