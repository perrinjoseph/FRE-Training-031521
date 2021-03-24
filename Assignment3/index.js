//Assignment 3 JavaScript
'use strict';

// Question 1
const reverseNumber = function(number){
    if(!Number.isInteger(number) || !number )throw new Error("Error 🔴: Input should be a number");
    const strNumber = ''+number;
    const outPut = +strNumber
    .split("")
    .reverse()
    .join("");
    return outPut;
}
console.log(reverseNumber(1122));


// Question 2
/**Assumtions made: Since no specificity is mentioned about the type of palindromes, i.e. plindromic number or alphabet palindrome, 
we will be using palindrome by String but the string can also contain other characters. Palindromes are also not case sensitive. 
*/
const palindrome = function(palindrome){
    if(!palindrome || typeof palindrome!='string')throw new Error("Error 🔴: Input should be a String");
    const reverse = [...palindrome]
    .reverse()
    .join("");
    const output = reverse.toLowerCase()===palindrome.toLowerCase()? true: false;
    return output;
}
console.log(palindrome("PeEreep"))


// Question 3
// This line of code will remove spaces. But not mentioned in requirements. 
// let ref = input.replace(/ /g,"");
const combination = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    let combinations =[];
    combinations.push(input);
    [...input]
    .forEach((el,index,arr)=>
    {
        combinations.push(el);
        for(let x =index+1; x<arr.length;x++){
            combinations.push(`${el}${arr[x]}`);
        }
    })
    return combinations;
}
console.log(combination("Dog"))


// Question 4
const reOrder = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    const outPut = [...input]
    .sort()
    .join("");
    return outPut;
}
console.log(reOrder("zzqas"))


// Question 5
const upperCaseCreater = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    const outPut = input
    .split(" ")
    .map((el,index,arr)=>{
        let strArr = [...el];
        strArr[0]= strArr[0].toUpperCase();
        return strArr.join("")
    })
    .join(" ")
    return outPut;
}
console.log(upperCaseCreater("aasdf hey comon"));


// Question 6
const longestWord = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    const lengthMap = new Map();
    input.split(" ")
    .forEach((el,index)=>lengthMap.set(el,el.length));
    const output= [...lengthMap]
    .sort((a,b)=>b[1]-a[1])[0][0];
    return output;
}
console.log(longestWord("Web Development Toutorial"));


// Question 7 
const numberVowels = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    const output = [...input]
    .filter(value=>'aeiou'.includes(value.toLowerCase()))
    .length
    return output;
}
console.log(numberVowels("aeyytwhw"));


 // Question 8
const isPrime = function(num){
    if(!Number.isInteger(num))throw new Error("Error 🔴: Input should be an Integer value")
    if(num<2)return `${num} is not a prime number`;
    for(let div = 2; div<num;div++){
        if(num % div === 0)return `${num} is not a prime number`;
    }
    return `${num} is a prime number`;
}
console.log(isPrime(13));


// Question 9 
const getType = (input)=>typeof input;
console.log(getType(()=>{}));


// Question 10 
//Identity matrix is a square matrix where all the elements in the principal diagonal are 1. Everything else 0;
const getMatrix = function(n){
    if(!Number.isInteger(n))throw new Error("Error 🔴: Input should be an Integer value")
    const arrMatrix = [...Array(n)]
    .map((val,index,arr)=>arr
    .map((el,i,li)=>i===index?1:0))
    return arrMatrix;
}
console.log(getMatrix(2));


// Question 11
//0's are also excepted here because it is a number.
const secondHighestLowest = function(arr){
    if(arr.length<=2 || !(arr instanceof Array) || !arr.every(el=>typeof el === 'number'))
    throw new Error("Error 🔴: Input should be an Array and should have atleast 3 or more elements to get 2nd lowest");

    if(arr.length===3)
    return '' +arr[1]

    if(arr.length>3){
        const rearrange = [...arr].sort();
        return rearrange[1]+"," +rearrange[rearrange.length-2]
    }
}
console.log(secondHighestLowest([1,2,3,4,5]));


//Question 12
const perfectNumber = function(num){
    if(num===1)return false;
    if(!Number.isInteger(num) || num <=0 )
    throw new Error("Error 🔴: Input should be a positive Integer");
    let divisors = [];

    //Getting divisors
    for(let x=0; x<=num;x++){
        if(num % x === 0)
        divisors.push(x);
    }

    //first condition
    const withoutNumberItSelf = divisors.slice(0,-1);
    const firstCondition = num === withoutNumberItSelf.reduce((acc,cur)=>acc+cur);

    //second condition
    const secondCodition = num === divisors.reduce((acc,cur)=>acc+cur)/2

    //final comparison
    return firstCondition && secondCodition?true:false;
    
}
console.log(perfectNumber(2));

// Question 13
const findFactors = function(num){
    if(!Number.isInteger(num) || num <=0)
    throw new Error("Error 🔴: Input should be a positive Integer greater than 0");
    let factors = [];
    for(let x = 1; x<=num;x++){
        if(num % x ===0)
        factors.push(x);
    }
   return factors;
}
console.log(findFactors(7));

// Question 14
const convertToCoins = function(amt,coins){
    //purposly sorted the reference.
    if(coins.sort((a,b)=>b-a)[0]>amt || !(typeof amt === 'number') || !coins.every(el=> typeof el ==='number'))
    throw new Error("Error 🔴: Invalid Input");
    let count = 0;
    let arrCoins = [];
    while(amt >0 && count<coins.length){
        if(coins[count]<=amt){
            amt-=coins[count];
            arrCoins.push(coins[count]);
        }
        if(coins[count]>amt)
            count++;
    }
    if(amt===0)
    return arrCoins;
    throw new Error("Error 🔴: The coins provided cannot add up to get the desired amt");
}
console.log(convertToCoins(55,[33,10,1]));


// Question 15
//ignoring Abstraction for this question because the question wanted only one function that performs the operations. To use abstraction I would create
//another helper function that will be within a while loop and if the returned value is false i will loop again until the user gives the correct details.
// const exponentCalculator = function(){
//     let base = prompt("Enter the Base");
//     base = +base;
//     while(isNaN(base) || !base){
//         alert("Error 🔴: Base has to be a number")
//         base = prompt("Enter the Base");
//         base = +base;
//     }
//     let exponent = prompt("Enter the Exponent");
//     exponent = +exponent;
//     while(isNaN(exponent) || !exponent){
//         alert("Error 🔴: Exponent has to be a number")
//         exponent = prompt("Enter the Exponent");
//         exponent = +exponent;
//     }
//     return base ** exponent;    
// }

// console.log(exponentCalculator());


//Question 16 
const uniqueString = function(input){
    if(!input || typeof input!='string')throw new Error("Error 🔴: Input should be a String");
    let uniqueSet = new Set();
    const uniqueString = [...input].map(val=>{
        uniqueSet.add(val);
    })
    const a=[...uniqueSet].join("");
    return a;
}
console.log(uniqueString("thequickbrownfoxjumpsoverthelazydog"));


//Question 17
const numberOfChar = function(input){
    if(!input || typeof input !='string')throw new Error("Error 🔴: Input should be a String");
    let charSet = new Set([...input]);
    let output = {};
    [...charSet]
    .forEach((val,index,array)=>{
        let occurence =[...input]
        .filter((el,i,arr)=>el.toLowerCase()==val.toLowerCase())
        .length
        output[val.toLowerCase()]=occurence;
    })
    return output;
}
console.log(numberOfChar("PerRin"));


// Question 18
const binarySearch = function(target,array){
    if(!target || !array )
    throw new Error("Error 🔴: Invalid Input");

    let validArray= array.filter(Boolean);
    if(!(array.every(val=>typeof val ==='number')) || typeof target!='number')
    throw new Error("Error 🔴: Invalid Input");
    
    validArray.sort((a,b)=>a-b);
    let low=0;
    let mid =0;
    let high=array.length-1;
    while(low<=high){
        
    }

}
console.log(binarySearch(23,[23,3,5,6,54,676,456,7,89]));
