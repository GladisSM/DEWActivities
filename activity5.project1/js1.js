class Window {
    constructor(options = {}) {
        this.width = options.width || 300;
        this.height = options.height || 300;
        this.posX = options.posX || 150;
        this.posY = options.posY || 150;

        this.el = document.createElement('div');
        this.el.style.width = this.width + 'px';
        this.el.style.height = this.height + 'px';
        this.el.style.top = this.posX + 'px';
        this.el.style.left = this.posY + 'px';
        this.el.style.position = 'absolute';
        this.el.style.backgroundColor = 'green';

        this.title = document.createElement('div');
        this.el.appendChild(this.title);
        document.body.appendChild(this.el);
    }

    setTitle(title) {
        this.title.innerHTML = title;
    }
}

class Calculator extends Window {
    constructor(options = {}) {
        super();
        this.operator = '';
        this.memory = '';

        this.setTitle("<h2>Calculadora</h2>");

        var content = document.createElement('div');
        content.innerHTML = '<input size="45" disabled="disabled" class="display">\
            <p></p> \
            <button class="clear-button" data-valor="C">C</button>\
            <button class="number-button" data-valor="0">0</button>\
            <button class="number-button" data-valor="1">1</button>\
            <button class="number-button" data-valor="2">2</button>\
            <p></p> \
            <button class="number-button" data-valor="3">3</button>\
            <button class="number-button" data-valor="4">4</button>\
            <button class="number-button" data-valor="5">5</button>\
            <button class="number-button" data-valor="6">6</button>\
            <p></p> \
            <button class="number-button" data-valor="7">7</button>\
            <button class="number-button" data-valor="8">8</button>\
            <button class="number-button" data-valor="9">9</button>\
            <button class="symbol-button" data-valor="-">-</button>\
            <p></p> \
            <button class="symbol-button" data-valor="+">+</button>\
            <button class="symbol-button" data-valor="x">x</button>\
            <button class="symbol-button" data-valor="/">/</button>\
            <button class="dot-button" data-valor=".">.</button>\
            <button class="equal-button" data-valor="=">=</button>\
        ';
        this.el.appendChild(content);

        this.display = content.querySelector('.display');
        this.display.value = '0';

        function numberButton(e) {
            if (e.target.dataset.valor == 0) {
                if (this.value != 0) {
                    this.value += e.target.dataset.valor;
                }
            } else {
                if (this.value == 0) {
                    this.value = e.target.dataset.valor;
                } else {
                    this.value += e.target.dataset.valor;
                }
            }

        }

        content.querySelectorAll('.number-button').forEach(button =>
            button.addEventListener('click', numberButton.bind(this.display))
        );

        function clearButton(e) {
            console.log(e.target.dataset.valor);
            this.clearDisplay();
            this.setOperator('');
            this.setMemory('');
            // vacia el display y debe borrar la memoria y operaciones almacenadas
        };
        content.querySelectorAll('.clear-button').forEach(button =>
            button.addEventListener('click', clearButton.bind(this))
        );


        function operationButton(e) {
            console.log(e.target.dataset.valor);
            // guardar el valor del display en la memoria
            this.setMemory(this.getDisplay().value);
            // vaciar el display a 0 
            this.clearDisplay();
            //guardar la operacion
            this.setOperator(e.target.dataset.valor);
            console.log(this);
        };
        content.querySelectorAll('.symbol-button').forEach(button =>
            button.addEventListener('click', operationButton.bind(this))
        );
        function decimalButton(e) {
            console.log(e.target.dataset.valor);
            if (this.value.indexOf(".") == -1) {
                this.value += e.target.dataset.valor;
            }
        };
        content.querySelectorAll('.dot-button').forEach(button =>
            button.addEventListener('click', decimalButton.bind(this.display))
        );


        function equalButton(e) {
            console.log(e.target.dataset.valor);
          // debemos comprobar tres casos: recuperar la memoria si no es cero, la operacion si no es cero y hacer la operacion
          if ((this.getMemory()!=0) && (this.getOperator()!='')) {
                switch (this.getOperator())
                {
                        case '+': 
                            this.setDisplayValue(parseFloat(this.getMemory())+parseFloat(this.getDisplay().value));
                        break;
                        case '-': 
                        this.setDisplayValue(parseFloat(this.getMemory())-parseFloat(this.getDisplay().value));
                        break;
                        case 'x': 
                        this.setDisplayValue(parseFloat(this.getMemory())*parseFloat(this.getDisplay().value));
                        break;
                        case '/': 
                        this.setDisplayValue(parseFloat(this.getMemory())/parseFloat(this.getDisplay().value));
                        break;

                }
          }
        };
        content.querySelectorAll('.equal-button').forEach(button =>
            button.addEventListener('click', equalButton.bind(this))
        );

    }

    setOperator(operator) {
        this.operator = operator;
    }

    getOperator() {
        return this.operator;
    }

    setMemory(memory) {
        this.memory = memory;
    }

    getMemory() {
        return this.memory;
    }

    clearDisplay() {
        this.display.value = '0';
    }
    
    setDisplayValue(value) {
        this.display.value = value;
    }

    getDisplay() {
        return this.display;
    }

}