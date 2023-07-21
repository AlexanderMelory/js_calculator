// noinspection JSVoidFunctionReturnValueUsed,UnnecessaryReturnStatementJS

let a = ''; // Первое число
let b = ''; // Второе число
let sign = ''; // Знак операции
let final = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'X', '/'];

// Вывод результата

const out = document.querySelector('.calc-screen p');

const clearAll = () => {
    a = '';
    b = '';
    sign = '';
    final = false;
    out.textContent = '0';
};

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick =
    event => {
        // Нажата НЕ кнопка
        if (!event.target.classList.contains('btn')) {
            return;
        }

        // нажата кнопка AC - вызов clearAll
        if (event.target.classList.contains('ac')) {
            return;
        }

        // Убираем ноль с дисплея
        out.textContent = '';
        // Получение нажатой кнопки
        const key = event.target.textContent;

        // Событие клавиш 0-9 или .
        if (digit.includes(key)) {
            if (b === '' && sign === '') {
                a += key;
                console.log(a, b, sign);
                out.textContent = a;
            } else if (a !== '' && b !== '' && final) {
                b = key;
                final = false;
                out.textContent = b;
            } else {
                b += key;
                out.textContent = b;
            }
            console.log(a, b, sign);
            return;
        }

        // Событие клавиш +/- / X
        if (action.includes(key)) {
            sign = key;
            out.textContent = sign;
            console.log(a, b, sign);
            return;
        }

        // Событие =
        if (key === '=') {
            if (b === '') {
                b = a;
            }
            switch (sign) {
                case '+':
                    a = (+a) + (+b);
                    break;
                case "-":
                    a = a - b;
                    break;
                case "X":
                    a = a * b;
                    break;
                case "/":
                    if (b === '0') {
                        out.textContent = 'Ошибка';
                        a = '';
                        b = '';
                        sign = '';
                        return;
                    }
                    a = a / b;
                    break;
            }
            final = true;
            out.textContent = a;
            console.log(a, b, sign);
        }
    };
