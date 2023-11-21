import { LitElement, html, css } from 'lit-element';
import stylesCss from './my-loginStyle';




  static get properties() {
    return {
      showLogin: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.showLogin = true;
  }

  toggleView() {
    this.showLogin = !this.showLogin;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="container">
        <div class="login ${this.showLogin ? '' : 'hide'}">
          <form action="" class="form">
          <h2 class="title">Iniciar sesión</h2>
          <div class="inputContainer">
            <input type="email" class="input" placeholder="Ingrese correo electrónico" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Por favor, ingrese un correo electrónico válido." />
            <label for="" class="label">Correo electrónico</label>
          </div>
          <div class="inputContainer">
            <input type="password" class="input" placeholder="Ingrese la contraseña" required pattern=".{6,}" title="La contraseña debe tener al menos 6 caracteres."/>
            <label for="" class="label">Contraseña</label>
          </div>
          <input type="submit" class="submitBtn" value="Iniciar Sesión" />
          <p class="parrafoRegister">¿No tienes cuenta? <a href="#" @click="${this.toggleView}">Regístrate</a></p>
        </form>
        </div>

        <div class="register ${this.showLogin ? 'hide' : ''}">
          <form action="" class="form">
            <h2 class="title">Registrate</h2>
            <div class="inputContainer">
                <input type="email" class="input" placeholder="Ingrese correo electrónico" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Por favor, ingrese un correo electrónico válido."/>
                <label for="" class="label">Correo electrónico</label>
            </div>
            <div class="inputContainer">
                <input type="text" class="input" placeholder="Ingrese nombre de usuario" required />
                <label for="" class="label">Nombre de Usuario</label>
            </div>
            <div class="inputContainer">
                <input type="password" class="input" placeholder="Ingrese la contraseña" required pattern=".{6,}" title="La contraseña debe tener al menos 6 caracteres."/>
                <label for="" class="label">Contraseña</label>
            </div>
            <div class="inputContainer">
                <input type="password" class="input" placeholder="Ingrese de nuevo la contraseña" required pattern=".{6,}" title="La contraseña debe tener al menos 6 caracteres."/>
                <label for="" class="label">Confirme su contraseña</label>
            </div>
            <input type="submit" class="submitBtn" value="Registrarse" />
            <p class="parrafoLogin">¿Tienes una cuenta? <a href="#" @click="${this.toggleView}">Inicia sesión</a></p>
          </form>
        </div>
      </div>
    `;
  }
});
customElements.define('my-login', MyElement);