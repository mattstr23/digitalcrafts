// // 1 MadLib

// function madLib(name, subject) {
//     return console.log(name,"'s favorite subject is", subject)
// }
// madLib("Matthew", "History")

// // 2 TipCalc

// const good = .2
// const fair = .15
// const bad = .1

// function tipAmount(billAmount, tipChoice){
//     let tipCalc = billAmount * tipChoice
// //     return console.log(tipCalc)
// // }
// tipAmount(100, bad)

// // 3 TipCalc2

// const good = .2
// const fair = .15
// const bad = .1

// function tipAmount(billAmount, tipChoice){
//     let tipCalc = billAmount * tipChoice
//     let totalAmount = tipCalc + billAmount
//     return console.log(totalAmount)
// }
// tipAmount(100, bad)

// // 4 Print Numbers FOR

// var x
// function printNumbers(startNum, endNum){
//     for (x = startNum; x <= endNum; x++){
//         console.log(x);
//     }
// }
// printNumbers(5,17)

// // 5 Print Numbers WHILE

// function printNumbers(startNum, endNum){
//     let x = startNum;
//     while (x <= endNum){
//         console.log(x);
//         x++;
//     }
// }
// printNumbers(4,14)

// // 6 Print a Square

// function printSquare(dimension){
//     for (let index = 0; index < dimension; index++) {
//         let row = "";
//         for (let index = 0; index < dimension; index++) {
//             row += "*";
//         } 
//         console.log (row + "");
//     }
// }
// printSquare(5)

// // 7 Print a Box

// function printBox(width, height){
//     let string = "";
//     for (let w = 0; w < width; w++) {
//         for (let h = 0; h < height; h++) {
//             if (w === 0) || w === width - 1) {
//                 string += "*"

//             }
//         } 
        
//     }
// }

// // 8 Print a Banner

// function printBanner(title){
//     const dash = "-".repeat(title.length);
//     const style = `
//         ${dash}
//         ${title}
//         ${dash}
// `;
//     return console.log(style)
// }
// printBanner("JS is interesting")