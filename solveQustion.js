//Rami Ali Abdulsattar
//ramiali19989@gmail.com
/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */


function BestProfit(arr = []) { //done
    let daysInWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    let BestDayToBuy, BestDayToSell, max = 0,
        min = arr.indexOf(Math.min(...arr));
    for (var i = min; i < arr.length - 1; i++) {
        (arr[i] < arr[i + 1]) ? max = i + 1: max = i;
    }
    BestDayToBuy = daysInWeek[min];
    BestDayToSell = daysInWeek[max];
    return { BestDayToBuy, BestDayToSell };
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));
/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

//done
let CheckOverlap = (t1Start, t1End, t2Start, t2End) => (t1End >= t2Start) ? "overlap" : "no overlap";
console.log(
    CheckOverlap(
        "13/5/2021 13:00",
        "14/5/2021 13:00",
        "14/5/2021 13:00",
        "16/5/2021 13:00"
    )
);

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * {rr}
 * {ll}
 * example HowManyPairs("RLRLRRLL") => 3
 * example HowManyPairs("RRLLRRRLLR") => 4
 * RL , LR , RRLL , LLRR
 */
function HowManyPairs(shoes) {
    let numberOFLetters = {};
    let countNumberfOfPairs = 0;
    for (let i in shoes) {
        (numberOFLetters[shoes[i]]) ? numberOFLetters[shoes[i]]++: numberOFLetters[shoes[i]] = 1;
        if (numberOFLetters.L == numberOFLetters.R)
            countNumberfOfPairs += 1;
    }
    return countNumberfOfPairs;

}
console.log(HowManyPairs("RLRLRRLL"));
console.log(HowManyPairs("RRLLRRRLLR"));
console.log(HowManyPairs("LLLRRR"));
console.log(HowManyPairs("LLRRLLRRRRRLLL"));
/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) { //done 
    let numberOFLetters = {};
    for (let i in word)
        (numberOFLetters[word[i]]) ? numberOFLetters[word[i]]++ : numberOFLetters[word[i]] = 1;
    return numberOFLetters;
}
console.log(HowManyLetters("kkssffoos"));

/** Q5
 * Write a binary search function
 */
function BinarySearch(element, arr) { //done 
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((high - low) / 2)
        let guess = arr[mid]
        if (guess === element) {
            return mid
        }
        if (guess > element) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null //if not sort array or not found
}

console.log(BinarySearch(5, [4, 2, 5, 2, 1, 4, 6, 7, 9]));
console.log(BinarySearch(1, [4, 2, 5, 2, 1, 5, 6, 1, 9]));
console.log(BinarySearch(2, [4, 2, 5, 2, 1, 5, 6, 1]));
/** Q6
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
 
 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
 
 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
 
 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */
function sortArray(arr = []) { //done 
    let hold = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                hold = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = hold;
            }
        }
    }
    return arr;
}
sortArray([38, 57, 45, 18, 47, 39])

/** Q7
  * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */
let minMax = (arr) => [Math.min(...arr), Math.max(...arr)]; //done 
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));


/** Q8
  * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
 
 Examples
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 
 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 
 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 Notes
 The array of numbers will be unsorted (not in order).
 Only one number will be missing.
  */
let missingNum = (arr) => 55 - arr.reduce((a, b) => a + b); //done 
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
/** Q9
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 
 Examples
 numToEng(0) ➞ "zero"
 
 numToEng(18) ➞ "eighteen"
 
 numToEng(126) ➞ "one hundred twenty six"
 
 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */
function numToEng(num = 0) { //done
    let oneToNineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hundred = "hundred";
    //ones
    if (num < 20)
        return oneToNineteen[num];
    //tens
    else if (num.toString().length < 3) {
        if (num.toString()[0] > 0 && num.toString()[1] == 0)
            return tens[num - 9 * parseInt(num.toString()[0])];
        else if (num.toString()[0] > 0 && num.toString()[1] > 0)
            return tens[(num - parseInt(num.toString()[1])) - 9 * parseInt(num.toString()[0])] + "-" + oneToNineteen[parseInt(num.toString()[1])];
        //hundreds
    } else if (num.toString().length < 4) {
        if (num.toString()[0] > 0 && (num.toString()[1] == 0 && num.toString()[2] == 0))
            return oneToNineteen[parseInt(num.toString()[0])] + ' ' + hundred;
        else
        if (num.toString()[0] > 0 && (num.toString()[1] == 0 && num.toString()[2] > 0))
            return oneToNineteen[parseInt(num.toString()[0])] + ' ' + hundred + ' ' + oneToNineteen[parseInt(num.toString()[2])];
        else
        if (num.toString()[0] > 0 && (num.toString()[1] > 0 && num.toString()[2] == 0))
            return oneToNineteen[parseInt(num.toString()[0])] + ' ' + hundred + ' ' + tens[parseInt(num.toString()[1])];
        else if (num.toString()[0] > 0 && (num.toString()[1] == 1 && num.toString()[2] > 0))
            return oneToNineteen[parseInt(num.toString()[0])] + ' ' + hundred + ' ' + oneToNineteen[parseInt(num.toString()[1] + num.toString()[2])];
        else
        if (num.toString()[0] > 0 && (num.toString()[1] > 0 && num.toString()[2] > 0))
            return oneToNineteen[parseInt(num.toString()[0])] + ' ' + hundred + ' ' + tens[(parseInt(num.toString()[1]))] + " " + oneToNineteen[parseInt(num.toString()[2])];
    }



}
console.log(numToEng(0));
console.log(numToEng(18));
console.log(numToEng(126));
console.log(numToEng(909));

/** Q10
  * Create a function that squares every digit of a number.
 
 Examples
 squareDigits(9119) ➞ 811181
 
 squareDigits(2483) ➞ 416649
 
 squareDigits(3212) ➞ 9414
 Notes
 The function receives an integer and must return an integer.
  */
function squareDigits(num) { //done 
    let getNumberString = num.toString();
    let finalValue = "";

    for (let i = 0; i < getNumberString.length; i++) {
        let squareDig = parseInt(getNumberString[i]) * parseInt(getNumberString[i]);
        finalValue += squareDig.toString();
    }
    return finalValue;
}
console.log(squareDigits(9119));
console.log(squareDigits(2483));
console.log(squareDigits(3212));
/** Q11
  * Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
 
 Example
 fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
 
 fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 Notes
 Make sure to return an array. 
  */


function fizzBuzz(num) { //done 
    let allnumber = [];
    for (var i = 1; i <= num; i++) {
        ((i % 3 == 0) && (i % 5 == 0)) ? allnumber.push("FizzBuzz"): (i % 5 == 0) ? allnumber.push("Buzz") : ((i % 3 == 0)) ? allnumber.push("Fizz") : allnumber.push(i);
    }
    return allnumber;
}
// other solve    
function fizzBuzz(num) { //done 
    let allnumber = [];
    for (var i = 1; i <= num; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) allnumber.push("FizzBuzz");
        else if (i % 5 == 0) allnumber.push("Buzz");
        else if ((i % 3 == 0)) allnumber.push("Fizz");
        else allnumber.push(i);
    }
    return allnumber;
}
console.log(fizzBuzz(21));
console.log(fizzBuzz(15));

/** Q12
  * Create a function that concatenates n input arrays, where n is variable.
 
 Examples
 concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
 
 concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
 
 concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
 
 concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
 Notes
 Arrays should be concatenated in order of the arguments.
  */
function concat() { //done 
    var arr = [];
    for (let index in arguments) arr.push(...arguments[index]);
    return arr;
}
console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]));
console.log(concat([4, 4, 4, 4, 4]));

/** Q13
  * Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 
 Examples
 arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 
 arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 
 arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 Notes
 Notice that num is also included in the returned array.
  */
function arrayOfMultiples(number, len) { //done 
    let mulNumber = [];
    for (let index = 0; index < len; index++) {
        mulNumber[index] = number * (index + 1);
    }
    return mulNumber;
}
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));
/** Q14
  * I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].
 
 Here is my code:
 
 function flatten(arr) {
   arr2 = [];
   for (let i = 0; i < arr.length; i++) {
     arr2.concat(arr[i]);
   }
   return arr2;
 }
 But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.
 
 Examples
 flatten([[1, 2], [3, 4]]) ➞ []
 // Expected: [1, 2, 3, 4]
 
 flatten([["a", "b"], ["c", "d"]]) ➞ []
 // Expected: ["a", "b", "c", "d"]
 
 flatten([[true, false], [false, false]]) ➞ []
 // Expected: [true, false, false, false]
 
  */
function flatten(arr) { //done 
    let arr2 = [];
    let arrHold = [];
    for (let i = 0; i < arr.length; i++) {
        arrHold.push(...arr[i]);
    }
    return arr2.concat(arrHold);
}
console.log(flatten([
    [1, 2],
    [3, 4]
]));
console.log(flatten([
    ["a", "b"],
    ["c", "d"]
]));
console.log(flatten([
    [true, false],
    [false, false]
]));

/** Q15
  * Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
 
 Examples
 testJackpot(["@", "@", "@", "@"]) ➞ true
 
 testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
 
 testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
 
 testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
 
 testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
 Notes
 The elements must be exactly identical for there to be a jackpot.
  */
function testJackpot(arr) { //done 
    return arr.every((val) => {
        for (let i = 0; i < arr.length; i++) {
            return arr[i] == val;
        }
    })
}
console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));

/** Q16
  * Create a function that takes an array of numbers and returns the second largest number.
 
 Examples
 secondLargest([10, 40, 30, 20, 50]) ➞ 40
 
 secondLargest([25, 143, 89, 13, 105]) ➞ 105
 
 secondLargest([54, 23, 11, 17, 10]) ➞ 23
 Notes
 There will be at least two numbers in the array.
  */
//done
let secondLargest = (arr = []) => arr.sort((a, b) => a - b)[arr.length - 2]; //done 12
console.log(secondLargest([10, 40, 30, 20, 50]));
console.log(secondLargest([25, 143, 89, 13, 105]));
console.log(secondLargest([54, 23, 11, 17, 10]));
/** Q17
  * Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
 
 Examples
 numberSplit(4) ➞ [2, 2]
 
 numberSplit(10) ➞ [5, 5]
 
 numberSplit(11) ➞ [5, 6]
 
 numberSplit(-9) ➞ [-5, -4]
 Notes
 All numbers will be integers.
 You can expect negative numbers too.
  */
//done
let numberSplit = (num) => (num % 2 !== 0) ? [Math.floor(num / 2), Math.round(num / 2)] : [num / 2, num / 2]; //done 13

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
/** Q18
  * Create a function that takes an array of strings and return an array, sorted from shortest to longest.
 
 Examples
 sortByLength(["Google", "Apple", "Microsoft"])
 ➞ ["Apple", "Google", "Microsoft"]
 
 sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
 ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
 
 sortByLength(["Turing", "Einstein", "Jung"])
 ➞ ["Jung", "Turing", "Einstein"]
 Notes
 All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.
  */
//done 
let sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);
console.log(sortByLength(["Google", "Apple", "Microsoft"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
console.log(sortByLength(["Turing", "Einstein", "Jung"]));

/** Q19
  * Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
 
 Examples 
 findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
 
 findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
 
 findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
 Notes
 Watch out for negative integers (numbers).
  */

function findLargestNums(arr) { //done 
    let largestNumbers = [];
    for (i in arr) {
        largestNumbers.push(Math.max(...arr[i]));
    }
    return largestNumbers;

}
console.log(findLargestNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43]
]));
console.log(findLargestNums([
    [0.4321, 0.7634, 0.652],
    [1.324, 9.32, 2.5423, 6.4314],
    [9, 3, 6, 3]
]));
console.log(findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0]
]));

/** Q20
  * A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
 
 [1, 3, 3, 5, 5, 5]
 // original array
 
 [1, 3, 5]
 // original array transformed into a set
 Create a function that sorts an array and removes all duplicate items from it.
 
 Examples
 set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
 
 set([4, 4, 4, 4]) ➞ [4]
 
 set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
 
 set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
 Notes
 For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
 See resources for a hint if you get stuck.
  */
let set = (arr) => { //done 
    return arr.sort((a, b) => a - b).filter((item, pos) => {
        return arr.indexOf(item) == pos;
    })
}
console.log(set([1, 3, 3, 5, 5]));
console.log(set([4, 4, 4, 4]));
console.log(set([5, 7, 8, 9, 10, 15]));
console.log(set([3, 3, 3, 2, 1]));