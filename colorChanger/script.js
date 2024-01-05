let inputBox = document.getElementById('input');
let resultBox = document.getElementById('result');

let changeColor = () => {
    let input = inputBox.value;
    resultBox.style.backgroundColor = input;
};

inputBox.addEventListener('input', changeColor);
window.addEventListener('input', changeColor);

/*You can also put hex codes into the input box and it will work just fine*/