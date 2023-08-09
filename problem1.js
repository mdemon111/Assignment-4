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

function matchFinder(string1, string2) {
    if( typeof string1 === 'string' && typeof string2 === 'string'){
        if(string1.length === 0 || string2.length === 0){
            return "please provide a positive number"
        }
    for(let i = 0;i => string1.length; i++){
        if(string2.endsWith (string1[i])){
            return true
        }
    }
    return false
} else{
    return "please provide a positive number"
} 
}


// problem-3

function sortMaker(arr) {
    if (!arr.length == 2) {
        return "Invalid input";
    }

    let [a, b] = arr;
    {
        if (a < 0 || b < 0) {
            return "Invalid input";
        }
        if (a === b) {
            return "equal";
        }
        let sortedArr = [b, a].sort((b, a) => b + a);

        return sortedArr;
    }
}

// problem-4
function findAddress(obj) {
    if(typeof obj !=='object'){
        return 'please provide a number';
    }else{
        const stree = obj.stree || "_";
        const house = obj.house || "_";
        const earth = obj.earth || "_";
        return stree + ',' + house + ',' + earth;
    }
}
const find = findAddress( 10, + '15A', + 'Earth Perfect')



// problem-5

// function canPay(array, number) {
//     if (array.length === 0) {
//         return "please provide a number";
//     }
    
//     let totalCash = array.reduce((sum, array) => sum + array, 0);
    
    
//     if (totalCash <= number) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const khuchraTaka = [1, 2 ,5];
// const chipsPrich = 10;

// const result = canPay(khuchraTaka, chipsPrich)
// console.log(result);

