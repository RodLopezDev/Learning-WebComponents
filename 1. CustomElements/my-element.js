class MyElement extends HTMLElement {
    constructor() {
        super();
        this.p = document.createElement('p');
    }
    connectedCallback() {
        this.p.textContent = "Hola mundo!!!";
        this.appendChild(this.p);
    }
}

//El nombre del componente debe tener minimo 2 palabras separadas por un guion
//Para que en futuras mejoras no se confunda con etiquetas propias de HTML
customElements.define("my-element", MyElement);