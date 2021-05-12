class MyELement extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>Hola Mundo</h2>
                <div>
                    <p>Soy mucho mas texto de ejemplo</p>
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
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("my-element", MyELement);