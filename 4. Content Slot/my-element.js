class MyELement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }); //Activar el modo 1
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    <slot></slot>
                </h2>
                <div>
                    <p></p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;
    }
    render() {
        //Buscar en el shadowRoot 2
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element", MyELement);