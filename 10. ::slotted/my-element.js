class MyELement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return ['title', 'parrafo'];
    }
    attributeChangedCallback(attribute, oldValue, newValue) { 
        if(oldValue !== newValue){
            this[attribute] = newValue;
        }
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    <slot name="title"></slot>
                </h2>
                <p>
                    <slot name="parrafo"></slot>
                </p>
                <slot></slot>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        //Define ciertas reglas de estilos al componente
        return `
            <style>
                ::slotted(span) {
                    font-size: 30px;
                    color: blue;
                }
                ::slotted(.text) {
                    color: red;
                }
            </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element", MyELement);