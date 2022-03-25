
    const screenValueBefore  = document.getElementById('value-before');
    const screenValueAfter  = document.getElementById('value-after');
    const btnNumbers = document.querySelectorAll('.number');
    const btnSign = document.querySelectorAll('.sign');

  const calculator = new Calculator();
    
    const display = new Display(screenValueBefore, screenValueAfter);
    
    btnNumbers.forEach(btn => {
        btn.addEventListener('click', () => {
            display.addNumber(btn.innerHTML);
        });
    });
    
    btnSign.forEach(btn => {
        btn.addEventListener('click', () => display.compute(btn.value))
    })

    console.log(calculator.add(5, 2));
console.log(calculator.division(5, 2));