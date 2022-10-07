//morning excerise

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2] // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26] // --> 351



// const sum = (...x) => {
//     let base = 0
//     console.log(x)
//     arr_2.forEach((v) => {
//         base += v
//     })
//     let base2 = 0
//     console.log(x)
//     arr_1.forEach((v) => {
//         base2 += v
//     })
//     let end = base + base2
//     return end
    
// }

// console.log(sum())

// teacher exaple
// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i < arr_1.length; i++) {
//     sum1 += arr_1[i]
//     sum2 += arr_2[i]
// }

// const result = sum1 + sum2
// console.log(result)

// let arr_3 = [4, 6, 7]
// let arr_4 = [8, 1, 9]

// let arr_x = []

// for (let i = 0; i <arr_3.length; i++) {
//     arr_x.push (`${arr_3[i]} + ${arr_4[i]}`)
// }
// for (let i = 0; i < arr_x.length; i++) {
//     console.log(arr_x[i])
// }

// teachers example
// const sumArr = [];

// for (let i = 0; i < arr_3.length; i++) {
//     const sum = arr_3[i] + arr_4[i]
//     sumArr.push (sum)
// }

// console.log (sumArr)

//palindrome
// .reverse() - puts the string in reverse
// .trim() - will cut the space around the string without modifing the string itself
// .replace(/\s/g, '') - cut the spaceing inbetween words/lettering without modifing the string itself

// function checkPalindrome (str) {
//     const trimmed = str.trim().replace(/\s/g, '')
//     console.log(trimmed)
//     const flippedStr = trimmed.split ('').reverse().join('')
//     return flippedStr.toLowerCase() === trimmed.toLowerCase() 
// }

// console.log (checkPalindrome('  nurses  run  '))

// let str = 'hello world'
// let flippedStr = ''

// for (let i = str.length - 1; i >= 0; i--) {
//     flippedStr += str[i]
// }
// console.log(flippedStr)


//when adding to different varables in while loop use +=



