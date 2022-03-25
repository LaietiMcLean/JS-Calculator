class Display {
    constructor(screenValueBefore, screenValueAfter) {
        this.screenValueBefore = screenValueBefore;
        this.screenValueAfter = screenValueAfter;
        this.calculator = new Calculator();
        this.typeOper = undefined;
        this.signs = {
            add: '+',
            subs:'-',
            division: '/',
            mult: '*'
        }
        this.valueAfter = '';
        this.valueBefore = '';
    }

    addNumber(number) {
        if(number === '.' && this.valueAfter.includes('.')) {
            return 
        }
        this.valueAfter = this.valueAfter.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.screenValueAfter.textContent = this.valueAfter;
        this.screenValueBefore.textContent = `${this.valueBefore} ${this.signs[this.typeOper] || ''}`;
    }

    deleteKeyOneCharacter() {
        this.valueAfter = this.valueAfter.toString().slice(0, -1);
        this.printValues();
    }

    deleteKey() {
        this.valueAfter = '';
        this.valueBefore = ''
        this.typeOper = undefined;
        this.printValues();
    }

    calc(){
        const valueAfter = parseFloat(this.valueAfter);
        const valueBefore = parseFloat(this.valueBefore);

        if(isNaN(valueAfter) || isNaN(valueBefore)) {
            return
        } else {
            this.valueAfter = this.calculator[this.typeOper](valueBefore, valueAfter);
        }
    }

    compute(type){
        this.typeOper !== 'equal' && this.calc();
        this.typeOper = type;
        this.valueBefore = this.valueAfter || this.valueBefore;
        this.valueAfter = '';
        this.printValues();
    }


}