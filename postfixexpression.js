function evaluatePostfix(expression) {
    let stack = [];
    
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        
        if (!isNaN(parseInt(char))) {
            stack.push(parseInt(char));
        } else {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            
            switch (char) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                default:
                    throw new Error("Invalid operator: " + char);
            }
        }
    }
    
    return stack.pop();
}

let postfixExpression = prompt("Enter the postfix expression:");
let result = evaluatePostfix(postfixExpression);
console.log("Result:", result);
