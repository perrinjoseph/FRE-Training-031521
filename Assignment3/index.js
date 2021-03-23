//Assignment 3 JavaScript
'use strict';

/* ----------------------------- Question 1 ----------------------------- */

function reverseNumber(number){
    if(!Number.isInteger(number) || !number )throw new Error("Error 🔴: Input should be a number");
    const strNumber = ''+number;
    return +strNumber.split("").reverse().join("");
}
console.log(reverseNumber(1122));


/* ----------------------------- Question 2 ----------------------------- */

/**Assumtions made: Since no specificity is mentioned about the type of palindromes, i.e. plindromic number or alphabet palindrome, 
we will be using palindrome by String but the string can also contain other characters. Palindromes are also not case sensitive. 
*/
const palindrome = function(palindrome){
    if(!palindrome || typeof palindrome!='string')throw new Error("Error 🔴: Input should be a String");
    const reverse = palindrome.split("").reverse().join("");
    return reverse.toLowerCase()===palindrome.toLowerCase()? true: false;
}
console.log(palindrome("PeEreep"))


/* ----------------------------- Question 3 ----------------------------- */

const combination = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    let combinations =[];
    // This line of code will remove spaces. But not mentioned in requirements. 
    // let ref = input.replace(/ /g,"");
    combinations.push(input);
    input.split("").forEach((el,index,arr)=>{
        combinations.push(el);
        for(let x =index+1; x<arr.length;x++){
            combinations.push(`${el}${arr[x]}`);
        }
    })
    return combinations;
}
console.log(combination("Dog"))


/* ----------------------------- Question 4 ----------------------------- */

const reOrder = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    return input.split("").sort().join("");
}
console.log(reOrder("zdsrr"))


/* ----------------------------- Question 5 ----------------------------- */

const upperCaseCreater = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    return input.split(" ").map((el,index,arr)=>{
        let strArr = el.split("");
        strArr[0]= strArr[0].toUpperCase();
        return strArr.join("")
    })
    .join(" ");
}
console.log(upperCaseCreater("aasdf hey comon"));


/* ----------------------------- Question 6 ----------------------------- */

const longestWord = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    const lengthMap = new Map();
    input.split(" ").forEach((el,index)=>lengthMap.set(el,el.length));
    return [...lengthMap].sort((a,b)=>b[1]-a[1])[0][0]
}
console.log(longestWord("Web Development Toutorial"));


/* ------------------------------- Question 7 ------------------------------- */

const numberVowels = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    return[...input].filter(value=>'aeiou'.includes(value.toLowerCase())).length
}
console.log(numberVowels("aeyytwhw"));


/* ------------------------------- Question 8 ------------------------------- */

const isPrime = function(num){
    if(!Number.isInteger(num))throw new Error("Error 🔴: Input should be an Integer value")
    if(num<2)return `${num} is not a prime number`;
    for(let div = 2; div<num;div++){
        if(num % div === 0)return `${num} is not a prime number`;
    }
    return `${num} is a prime number`;
}
console.log(isPrime(13));


/* ------------------------------- Question 9 ------------------------------- */

const getType = (input)=>typeof input;
console.log(getType(null));


/* ------------------------------- Question 10 ------------------------------ */


