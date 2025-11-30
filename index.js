//storing our answers in an array
const history = [] 

function storingResult(a, b, operator, result){
    const record ={}
        record.num1 = a
        record.num2 = b
        record.operator= operator
        record.result = result
    
    history.push(record)
}

storingResult()

//addition function
function Addition(){
    const result = a + b
    storingResult(a,b, "+",result)
    return result   
}
Addition()



//subtraction function
function Subtraction(){
    const result = a - b
    storingResult(a, b, "-" , result)
    return result
}
Subtraction()



//multiplication function 
function Multiplication(){
    const result = a * b
    storingResult(a, b, "*", result)
    return result
}
Multiplication()



//division function
function Division(){
    const result = a / b
    storingResult (a, b, "*", result)
    return result
}
Division()

console.log(Addition())
console.log(Subtraction())
console.log(Division())
console.log(Multiplication())
console.log(storingResult())




