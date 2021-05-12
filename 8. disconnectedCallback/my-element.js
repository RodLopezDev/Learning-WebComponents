class MyELement extends HTMLElement {
    constructor() {
        super();
        console.log("constructor");
    }
    connectedCallback() {
        console.log("connectedCallback");
    }
    disconnectedCallback() {
        console.log("disconnectedCallback");
    }
}

customElements.define("my-element", MyELement);

const oElement = document.querySelector("my-element");
console.log(oElement);

setTimeout(() => {
    oElement.remove();
}, 1000);