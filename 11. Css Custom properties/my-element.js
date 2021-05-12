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
                    <slot></slot>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        //Se usan las custom properties asumiendo que :host es :root del componente
        return `
            <style>
                :host {
                    --primary-color: tomato;
                    --secondary-color: salmon;
                    --heading-primary: 30px;
                    --heading-secondary: 25px;
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                }
                section {
                    background-color: var(--primary-color);
                }
                section div {
                    background-color: var(--secondary-color);
                }
                h1 {
                    font-size: var(--heading-primary);
                }
                p {
                    font-size: var(--heading-secondary);
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