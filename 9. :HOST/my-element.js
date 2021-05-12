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
                <div>
                    <p>
                        <slot name="parrafo"></slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        //Define ciertas reglas de estilos al componente
        return `
            <style>
                :host {
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    font-size: 20px;
                    background-color: gray;
                }
                :host(.blue) {
                    background-color: blue;
                }
                :host([yellow]) {
                    background-color: yellow;
                }
                :host-context(article.card) {
                    background-color: red;
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