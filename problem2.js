function sortMaker(arr){
    let maker = arr
    if(num1 > num2){
        return [num1,num2]
    }else if(num2>num1)
        {return [num1,num2]
        }
    else{
        return maker
    }
}
const makers = sortMaker(3,4)
console.log(makers);
