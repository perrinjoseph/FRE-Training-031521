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
const exponentCalculator = function(){
    let base = prompt("Enter the Base");
    base = +base;
    while(isNaN(base) || !base){
        alert("Error 🔴: Base has to be a number")
        base = prompt("Enter the Base");
        base = +base;
    }
    let exponent = prompt("Enter the Exponent");
    exponent = +exponent;
    while(isNaN(exponent) || !exponent){
        alert("Error 🔴: Exponent has to be a number")
        exponent = prompt("Enter the Exponent");
        exponent = +exponent;
    }
    return base ** exponent;    
}
console.log(exponentCalculator());


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
    if(target<0 || !array )
    throw new Error("Error 🔴: Invalid Input");

    let validArray= array.filter(el=>el>=0);
    if(!(validArray.every(val=>typeof val ==='number')) || typeof target!='number')
    throw new Error("Error 🔴: Invalid");

    validArray.sort((a,b)=>a-b);
    let low=0;
    let middle =0;
    let high=array.length-1;
    while(low<=high){
        middle = Math.floor((low+high)/2);
        if(target ==validArray[middle])
            return true;
        
        if(target>array[middle]){
            low = middle +1;
        }
        
        if(target<=array[middle])
            high=middle-1;
    }
    return false;
}
console.log(binarySearch(0,[0,23,3,5,6,54,676,456,7,89]));


//Question 19
const elements = function(arr,target){
    if(target<0 || !arr ||arr.length==0)
    throw new Error("Error 🔴: Invalid Input");

    let validArray= arr.filter(el=>el>=0);
    if(!(validArray.every(val=>typeof val ==='number')) || typeof target!='number')
    throw new Error("Error 🔴: Invalid Input");

    return arr.filter(el=>el>target);
    console.log(validArray);
}
console.log(elements([1,33,44,55],34));


//Question 20
const randomId = function(n){
    if(!Number.isInteger(n) || !n )throw new Error("Error 🔴: Input should be a number")
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let output = '';
    for(let x = 0; x<n; x++)
    {
        output+=chars.charAt(Math.floor(Math.random() * chars.length-1))
    }
    return output;
}
console.log(randomId(15));


//Question 21
const subSets= function (array,n){
    const output = [[]] 
    array.forEach((el,index,array)=>{
        const outputLength = output.length;
        for(let i = 0; i<outputLength;i++){
            let tempArr = output[i].slice(0)
            output.push(tempArr);
            tempArr.push(el);
        }
    })
    return output.filter(el=>el.length === n);
}
console.log(subSets([1,2,3],2))


//Question 22
const countOccurrences = function(search,target){
    if(!target || typeof target !='string' || target.length>1)
    throw new Error("Error 🔴: The target should only be one letter");
    
    if(!search || typeof search !='string')
    throw new Error("Error 🔴: Search String should be a String");
    return [...search].filter(val=>val===target).length;
}

console.log(countOccurrences("aaaasd","a"));


//Question 23
const firstNonRepeatingChar = function(input){
    if(!input || typeof input !='string')
    throw new Error("Error 🔴: Input should be a String");

    const inputArr = [...input]
    const aSet = new Set(inputArr)
    let aMap = new Map();
    [...aSet]
    .forEach((val,index,array)=>{
        let occurence =inputArr
        .filter((el,i,arr)=>el.toLowerCase()==val.toLowerCase())
        .length
        aMap.set(val.toLowerCase(),occurence)
    })
    const output = [...aMap].filter(e=>e[1]===1)[0]
    return output?output[0]:-1;
}
console.log(firstNonRepeatingChar("aabbssfffr"));


//Question 24
const bubbleSort = function(array){
    if(!array || !(array.every(e=>typeof e ==='number')) || array.length===0)
    throw new Error("Error 🔴: Input should be an array of numbers only");

    let high = array.length;
    for(let x=0; x<high;x++){
        for(let i=0;i<high-x-1;i++){
            if(array[i]>array[i+1]){
                let temp = array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
            }
        }
    }
    return array.sort((a,b)=>b-a)
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))



//Question 25
const longestCountryName = function(array){
    if(!array || !(array.every(el=>typeof el ==='string')) || array.length===0)
    throw new Error("Error 🔴: Input should be an array of Strings only");

    const aSet = new Set([...array]);
    const aMap = new Map();
    [...aSet].forEach(el=>{
        aMap.set(el,el.length);
    })
    const comparison = [...aMap].sort((a,b)=>b[1]-a[1])[0][1]
    return [...aMap].filter(el=>el[1]===comparison).map(el=>el[0]).join(', ')
}
console.log(longestCountryName(["Africa","United Aram Emirates","United States Of Am"]));



//Question 26
const highestUniqueSubString = function(input)
{
    if(!input || typeof input !='string')
    throw new Error("Error 🔴: Input should be a String");
    const arrInput=[...input];
    let output="";
    let str="";
    for(let j=0;j<arrInput.length;j++){
        for(let i=j;i<arrInput.length;i++){
            if(str.includes(arrInput[i])){
                break;
            }
            else{
                str+=arrInput[i];
            }
         }
        if(output.length<str.length)
            output=str;
        str="";
    }
    return output;
}
console.log(highestUniqueSubString("wherrdopwsa"));



//Question 27
const longestPalindrome = function (input){
    let longestPalendrome = '';
    [...input].forEach((val,i,arr)=>{
        let first;
        for (let x = i + 1; x < input.length; x++){
          if (val === input[x]){
            first = x;
            let sub = input.slice(i, first + 1);
            if (sub.length > longestPalendrome.length && sub.toLowerCase() === sub
            .split('')
            .reverse()
            .join('')
            .toLowerCase()) {
                  longestPalendrome = sub;
            }
          }
        }
    })
    return longestPalendrome;
  };
  console.log(longestPalindrome("aspaap"))


// Question 28
function inviteGuest(name,award,callback){
    if(!name || typeof name !='string')
    throw new Error("Error 🔴: Input should be a String");

    if(!award || typeof award !='string')
    throw new Error("Error 🔴: Input should be a String");

    if(!callback || !(typeof callback ==='function'))
    throw new Error("Error 🔴: Input should be a function");

    console.log("Welcome to the Annual Prize Day");
    callback(name,award);
}

function giveAward(name,award){
    console.log(`The ${award} Award Goes To....${name}!! Great Job!`);
}
inviteGuest("Perrin","Best React Developer",giveAward);


//Question 29
const getFunctionName = function(f){
    if(!f || !(typeof f ==='function'))
    throw new Error("Error 🔴: Input should be a function");
    
    return f.name?f.name:"Function is annonymous it does not have a name "
}
console.log(getFunctionName(()=>{}));