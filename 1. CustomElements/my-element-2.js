const template = document.createElement("div");
template.innerHTML = `
    <style>
        p {
            color: red;
        }
        .texto {
            color: yellow;
        }
    </style>
    <p class="texto">Hola Mundito 1</p>
    <p>Hola Mundito 2</p>
    <p>Hola Mundito 3</p>
`;

class MyElement2 extends HTMLElement {
    constructor() {
        super();
        this.p = document.createElement('p');
    }
    connectedCallback() {
        this.p.textContent = "Hola mundo!!!";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}

//El nombre del componente debe tener minimo 2 palabras separadas por un guion
//Para que en futuras mejoras no se confunda con etiquetas propias de HTML
customElements.define("my-element2", MyElement2);