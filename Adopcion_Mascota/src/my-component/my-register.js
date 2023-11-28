import { LitElement, html } from 'lit-element';
import stylesCss from './my-registerStyle'

export class MyElement extends LitElement {

    static get styles(){
        return [stylesCss]
    }
    render() {
        return html`<header>
        <div class="content">
            <img src="./img/logo_huella.png" alt="logo_huella" class="logo_huella">
            
            <nav>
                <a href="../../home.html">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="../../catalogo.html">Catálogo</a>
                <a class="active" href="../../index.html">Perfil Mascota</a>
            </nav>
            <div class="clearfix"></div>
        </div>
    </header>
    <br>
    <br>
    <section class="content_dog">
        <div class="half">
            <h1>Balto</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores a aspernatur voluptas 
            commodi vitae laboriosam perspiciatis voluptatem eaque doloremque non, quidem adipisci vero, 
            id illo similique nisi distinctio nulla!</p>
            <a href="#">
                <button type="button" class="btn-adopt">Adóptame</button>
            </a>
        </div>

        <div class="half">
            <img src="./img/balto.jpg" alt="balto_img">
        </div>
        
        <div class="clearfix"></div>
    </section>
    <br>
    <section class="content_dog">
        <div class="half">
            <h1>Rino</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores a aspernatur voluptas 
            commodi vitae laboriosam perspiciatis voluptatem eaque doloremque non, quidem adipisci vero, 
            id illo similique nisi distinctio nulla!</p>
            <a href="#">
                <button type="button" class="btn-adopt">Adóptame</button>
            </a>
        </div>

        <div class="half">
            <img src="./img/rino.jpg" alt="balto_img">
        </div>
        
        <div class="clearfix"></div>
    </section>
    <br>
    <section class="content_dog">
        <div class="half">
            <h1>Blue</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores a aspernatur voluptas 
            commodi vitae laboriosam perspiciatis voluptatem eaque doloremque non, quidem adipisci vero, 
            id illo similique nisi distinctio nulla!</p>
            <a href="#">
                <button type="button" class="btn-adopt">Adóptame</button>
            </a>
        </div>

        <div class="half">
            <img src="./img/blue.jpg" alt="balto_img">
        </div>
        
        <div class="clearfix"></div>
    </section>

    <section class="content">
        <div class="description">
            <h1>Adopción Mascotas</h1>
            <h3>¡Puedes adoptar una mascota ahora mismo!</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sequi maiores enim quam qui asperiores reiciendis assumenda minima fuga cum repudiandae, 
            perferendis alias harum, quo porro ad nulla quisquam incidunt obcaecati?
            </p>
        </div>
        <div class="clearfix"></div>
    </section>

    <section class="content">
        <h1>Sobre Nosotros</h1>
        <ul class="sobreNosotros">
            <li>
                <a href="#" class="direcc">
                    <img src="./img/dog_cat.png" alt="catalogo_img">
                    Catálogo de Mascotas
                </a>
            </li>
            <li>
                <a href="#" class="direcc">
                    <img src="./img/adoptado.png" alt="adoptados_img">
                    Mascotas Adoptadas
                </a>
            </li>
            <li>
                <a href="#" class="direcc">
                    <img src="./img/pet-shelter.png" alt="perfil_img">
                    Perfil Mascota
                </a>
            </li>
            <li>
                <a href="#" class="direcc">
                    <img src="./img/nosotros.png" alt="nosotros_img">
                    Acerca de Nosotros
                </a>
            </li>
        </ul>

        <div class="clearfix"></div>

    </section>

    <footer>
        &copy; 2023 Adopción Mascotas
    </footer>
      `;
    }
}

customElements.define('my-register', MyElement);
