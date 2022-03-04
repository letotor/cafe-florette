customElements.define('headerT',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('headerT-template');
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    }
);