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
//     if (arr.length !== 2) {
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

// console.log(sortMaker([4, 2]));
// console.log(sortMaker([2, 2]));
// console.log(sortMaker([4, -2]));


// problem-4
function findAddress(obj) {
    const street = obj.street || "__street__";
    const address = obj.house || "__house__";
    const society = obj.society || "__society__";

    const output = `street: ${street}\nAddress: ${address}\nsociety: ${society}`;
    return output;
    
}

const sampleObject = {
    street:10,
    house: "15A",
    society: 'Earth Perfect'
};


const output = findAddress(sampleObject);
console.log(output);
// {street: 10,house: 15A,society: “Earth
//     Perfect”}

