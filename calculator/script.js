var expression='';

function appendNumber(number){
    expression+=number;
    updateDisplay();
}

function appendOperator(operator){
    if(expression==='') return;
    const lastChar=expression[expression.length-1];
    if('+-*/'.includes(lastChar)){
        expression=expression.slice(0,-1)+operator;
    }
    else{
        expression+=operator;
    }
    updateDisplay();
}

function appendDecimal(point){
    const parts=expression.split(/[\+\-\*\/]/);
    const lastPart=parts[parts.length-1];
    if(!lastPart.includes(point)){
        expression+=point;
    }
    updateDisplay();
}

function displayAns(){
    try{
        expression=eval(expression).toString();
        updateDisplay();
    }
    catch{
        expression='';
        document.getElementById('output').textContent='error';
    }
}

function clearDisplay(){
    expression='';
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('output').textContent=expression;
}