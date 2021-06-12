class Window {
    constructor(options = {}){
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

        document.body.appendChild(this.el);
    }

    setTitle(title){
        this.el.innerText = title;
    }
}

class Calculator extends Window{
    constructor(options = {}){
        super();
        
        var title = document.createElement('div');
        title.innerHTML= '<h2>   Titulo de la Calculadora  </h2>'
        this.el.appendChild(title);
        var content = document.createElement('div');
        content.innerHTML = '<input size="45" disabled="disabled" class="display">\
            <p></p> \
            <button class="clear-button" data-valor="CE">CE</button>\
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
            <button class="coma-button" data-valor=",">,</button>\
        ';
        this.el.appendChild(content);

        this.display = content.querySelector('.display');
        function buttonClick(e) {
            this.value +=  e.target.dataset.valor;
        }
        content.querySelectorAll('.number-button').forEach(button =>
            button.addEventListener('click', buttonClick.bind(this.display))
        );






    }
}