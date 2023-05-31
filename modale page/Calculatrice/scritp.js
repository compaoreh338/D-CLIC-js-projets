var currentValue = '';

function appendToDisplay(value) {
    currentValue += value;
    document.getElementById('display').value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    document.getElementById('display').value = currentValue;
}

function deleteLastCharacter() {
    currentValue = currentValue.slice(0, -1);
    document.getElementById('display').value = currentValue;
}

function calculate() {
    var display = document.getElementById('display');
    var expression = display.value;
    var result;
    try {
        result = eval(expression); // Utilisation de la fonction eval pour évaluer l'expression
        display.value = result;
        currentValue = result.toString();
    } catch (error) {
        display.value = 'Erreur';
        currentValue = '';
    }
}

function calculateTrigFunction(func) {
    var display = document.getElementById('display');
    var value = parseFloat(currentValue);
    var result;
    switch (func) {
        case 'sin':
            result = Math.sin(value);
            break;
        case 'cos':
            result = Math.cos(value);
            break;
        case 'tan':
            result = Math.tan(value);
            break;
    }
    display.value = result;
    currentValue = result.toString();
}

function calculateSqrt() {
    var display = document.getElementById('display');
    var value = parseFloat(currentValue);
    var result = Math.sqrt(value);
    display.value = result;
    currentValue = result.toString();
}

// Fonction de gestion des événements de frappe du clavier
function handleKeyPress(event) {
    var keyPressed = event.key;
    var validKeys = /^[0-9+\-*/.sincot()]|Backspace|Delete|Enter$/;

    if (!validKeys.test(keyPressed)) {
        return;
    }

    event.preventDefault();

    var display = document.getElementById('display');

    switch (keyPressed) {
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
        case 'Delete':
            deleteLastCharacter();
            break;
        case 's':
            if (event.shiftKey) {
                calculateTrigFunction('sin');
            }
            break;
        case 'c':
            if (event.shiftKey) {
                calculateTrigFunction('cos');
            }
            break;
        case 't':
            if (event.shiftKey) {
                calculateTrigFunction('tan');
            }
            break;
        default:
            appendToDisplay(keyPressed);
            break;
    }
}

// Ajout de l'écouteur d'événements sur la fenêtre pour capturer les frappes du clavier
window.addEventListener('keydown', handleKeyPress);
