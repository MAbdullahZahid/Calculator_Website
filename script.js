document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('displayscreen');
    const buttons = Array.from(document.getElementsByTagName('button'));
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.innerText;

            switch(value) {
                case 'C':
                    currentInput = '';
                    display.innerText = '';
                    break;
                case '=':
                    try {
                        display.innerText = evaluateExpression(currentInput);
                    } catch (error) {
                        display.innerText = 'Error';
                    }
                    currentInput = display.innerText;
                    break;
                case '√':
                    currentInput += 'Math.sqrt(';
                    display.innerText = currentInput;
                    break;
                case 'x²':
                    currentInput += '**2';
                    display.innerText = currentInput;
                    break;
                case 'x!':
                    currentInput += 'factorial(';
                    display.innerText = currentInput;
                    break;
                case 'log':
                    currentInput += 'Math.log10(';
                    display.innerText = currentInput;
                    break;
                case 'sin':
                    currentInput += 'Math.sin(';
                    display.innerText = currentInput;
                    break;
                case 'cos':
                    currentInput += 'Math.cos(';
                    display.innerText = currentInput;
                    break;
                case 'tan':
                    currentInput += 'Math.tan(';
                    display.innerText = currentInput;
                    break;
                case 'π':
                    currentInput += Math.PI;
                    display.innerText = currentInput;
                    break;
                case '%':
                    currentInput += '/100';
                    display.innerText = currentInput;
                    break;
                default:
                    currentInput += value;
                    display.innerText = currentInput;
                    break;
            }
        });
    });

    function evaluateExpression(input) {
        input = input.replace(/factorial\((\d+)\)/g, (_, n) => factorial(parseInt(n)));
        return eval(input);
    }

    function factorial(n) {
        return n === 0 ? 1 : n * factorial(n - 1);
    }
});
