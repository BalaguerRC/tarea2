class Display{
    constructor(displayPreviousValue, displayCurrentValue){
        this.displayCurrentValue= displayCurrentValue;
        this.displayPreviousValue= displayPreviousValue;
        this.calculator= new Calculator();
        this.OpetationType=undefined;
        this.previousvalue='';
        this.currentvalue='';
        this.signo={
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
    }

    AddNumber(number){
        if(number === '.' && this.currentvalue.includes('.')) return
        this.currentvalue= this.currentvalue.toString() + number.toString();
        this.PrintValues();
    }

    Delete(){
        this.currentvalue=this.currentvalue.toString().slice(0,-1);
        this.PrintValues();
    }

    DeleteCE(){
        this.currentvalue='';
        this.previousvalue='';
        this.OpetationType=undefined;
        this.PrintValues();
    }

    computar(tipy){
        this.OpetationType !== 'igual' && this.calculate();
        this.OpetationType = tipy;
        this.previousvalue= this.currentvalue || this.previousvalue;
        this.currentvalue= '';
        
        this.PrintValues();
    }

    PrintValues(){
        this.displayCurrentValue.textContent=this.currentvalue;
        this.displayPreviousValue.textContent=`${this.previousvalue} ${this.signo[this.OpetationType] || ''}`;
        /*localStorage.setItem('resultado', JSON.stringify(this.displayCurrentValue.textContent || this.displayPreviousValue.textContent));
        console.log(localStorage.getItem('resultado'));*/
    }

    calculate(){
        const previousValue = parseFloat(this.previousvalue);
        const currentValue = parseFloat(this.currentvalue);

        if(isNaN(currentValue)  || isNaN(previousValue) ) return
        this.currentvalue = this.calculator[this.OpetationType](previousValue, currentValue);
    }
}