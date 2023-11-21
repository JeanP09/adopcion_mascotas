import { LitElement, html } from 'lit-element';
import stylesCss from './my-componentStyle'
import myLoginStyle from './my-loginStyle';

export class MyElement extends LitElement {

    constructor(){
        super()
        this.saludo = "Saludo 1"
    }
    static get properties(){
        return {
            saludo: { type:String },
        };
    }

    static get scopedElements(){
        return {
            "my-login": MyLogin,
            "my-register": MyElement
        }
    }

    static get styles(){
        return [stylesCss]
    }

    cambio(){
        this.saludo="El primer componente"
    }

    renderAll(){
        if(this.paramComponent == 1){
            this.paramComponent = html`<my-login></my-login>`
        } else {
            this.paramComponent = html`<my-register></my-register>`
        }
    }

    mostrarComponent() {
        this.this.paramComponent = 2;
        this.renderAll();
    }

    render() {
        this.this.paramComponent = 1;
        
        return html`
        ${this.componentesHtml}
        ${this.mostrarLogin()}

        <button @click="${(e)=>this.mostrarComponent()}">Registrarse</button>
      `;
    }
}

customElements.define('my-element', MyElement);