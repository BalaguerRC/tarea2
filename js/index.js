const displayPreviousValue= document.getElementById('previous-value');
const displayCurrentValue= document.getElementById('current-value');
const NumberButtons= document.querySelectorAll('.number');
const OperatorsButtons= document.querySelectorAll('.operator');

const display= new Display(displayPreviousValue, displayCurrentValue);

NumberButtons.forEach(boton => {
    boton.addEventListener('click', () => display.AddNumber(boton.innerHTML));
});

OperatorsButtons.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
});