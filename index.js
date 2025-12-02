// storing operation records in an array (exposed on window for browser UI)
const history= []

function storingResult(a, b, operator, result) {
    const record = {
        num1: a,
        num2: b,
        operator: operator,
        result: result,
    }
    history.push(record)
    return record
}

// addition function
function add(a, b) {
    const result = a + b
    storingResult(a, b, '+', result)
    return result
}




// subtraction function
function subtract(a, b) {
    const result = a - b
    storingResult(a, b, '-', result)
    return result
}




// multiplication function
function multiply(a, b) {
    const result = a * b
    storingResult(a, b, '*', result)
    return result
}




// division function
function divide(a, b) {
    if (b === 0) {
        storingResult(a, b, '/', null)
        return 'Error: Division by zero'
    }
    const result = a / b
    storingResult(a, b, '/', result)
    return result
}

// Example usage — remove or replace these with UI bindings as needed
console.log('5 + 3 =', add(5, 3))
console.log('5 - 3 =', subtract(5, 3))
console.log('5 * 3 =', multiply(5, 3))
console.log('5 / 0 =', divide(5, 0))
console.log('5 / 2 =', divide(5, 2))

// show history
console.log('history:', history)







