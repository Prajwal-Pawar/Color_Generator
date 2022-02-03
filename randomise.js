var button = document.getElementById('btn');
var display = document.getElementById('display');

button.addEventListener('click', () => {
    const alphaNumeric = 'ABCDEF0123456789';

    var hexValue = '';
    
    for(let i = 0; i <= 5; i++){
        let randomString = alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)];
        hexValue += randomString;
    }
    button.value = hexValue;
    display.style.backgroundColor = '#' + hexValue;
});