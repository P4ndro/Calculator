<script src="index.js"></script>

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Easter egg: if input is 11074151, show 'KUTAISI'
        if (display.value === '11074151') {
            display.value = 'KUTAISI';
        } else {
            display.value = eval(display.value);
        }
    } catch {
        display.value = 'Error';
    }
}
