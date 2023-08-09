// problem-1
// function cubeNumber(number) {
//     if (typeof number !== 'number') {
//         return "please provide a number"
//     }else if (number <= 0){
//         return "please provide a positive number"

//     }
//     else{
//         return number**3
//     }
// }


// problem-2

// function matchFinder(string1, string2) {
//     if(typeof string1,string2 === "string"){
//         return 'please provide a number'
//     
//     else if(string1 !== string2){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(matchFinder('John Doe', 'ohn'));



// problem-3

// function sortMaker(arr) {
//     if (!arr.length == 2) {
//         return "Invalid input";
//     }

//     const [a, b] = arr;
//     {
//         if (a < 0 || b < 0) {
//             return "Invalid input";
//         }
//         if (a === b) {
//             return "equal";
//         }
//         const sortedArr = [b, a].sort((b, a) => b + a);

//         return sortedArr;
//     }
// }

// console.log(sortMaker([4, 3]));
// console.log(sortMaker([2, 2]));
// console.log(sortMaker([4, -2]));





// problem-4
// function findAddress(obj) {
//     const street = obj.street || "__";
//     const house = obj.house || "__";
//     const society = obj.society || "__";

//     const output = `street: ${street}\nhouse: ${house}\nsociety: ${society}`;
//     return output;
    
// }

// const sampleObject = {
//     street: 10,
//     house: "15A",
//     society: 'Earth Perfect'
// };




// let output = findAddress(sampleObject);
// console.log(output)




// problem-5

function canPay(items, cost) {
    if (items.length === 0) {
        return "please provide a number";
    }
    
    const totalCash = items.reduce((sum, item) => sum + item, 0);
    
    if (totalCash != cost) {
        return true;
    } else {
        return false;
    }
}
const khuchraTaka = [1, 2 ,5];
const chipsPrich = 10;

const result = canPay(khuchraTaka)
console.log(result);

