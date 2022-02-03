var input = document.getElementById('hex-value');
var display = document.getElementById('display');

input.addEventListener('input', () => {
    let hexValue = input.value
    display.style.backgroundColor = '#' + hexValue;
});