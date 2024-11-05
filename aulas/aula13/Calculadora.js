let textValue = ''

function addOperator(operator){
    textValue += operator;
    updateText();
}

function updateText(){
    document.querySelector(".input2").value = textValue;
}