import { LitElement, html } from 'lit-element';
import stylesCss from './my-homeStyle'

export class MyElement extends LitElement {

    static get styles(){
        return [stylesCss]
    }
    render() {
        return html`
        <header>
        <div class="content">
            <img src="./img/huella.png" alt="logo_huella" class="logo_huella">
            
            <nav>
                <a href="../../home.html">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="../../catalogo.html">Catálogo</a>
                <a class="active" href="../../index.html">Perfil Mascota</a>
            </nav>
            <div class="clearfix"></div>
        </div>
    </header>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to=""></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="./img/carrusel2.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./img/carrusel1.webp" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./img/carrusel3.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


      <h1 class="titulo">Bienvenidos</h1>

      <div class="introduccion">
        <p class="mansajeInicio">
          Adoptar a un perrito es una decisión que va más allá de sumar una mascota a tu hogar; es un acto de compasión y amor que transforma no solo la vida del animal, sino también la tuya. Al optar por la adopción, brindas a un perrito la oportunidad de tener un hogar lleno de afecto y seguridad. Estos animales, a menudo provenientes de situaciones difíciles, responden con una lealtad inigualable y una gratitud que se traduce en una conexión única.
  
          La adopción no solo salva vidas, sino que también contribuye a combatir el problema de la sobrepoblación en refugios y calles. Al darle a un perrito la posibilidad de tener un hogar permanente, estás marcando una diferencia tangible en la lucha contra el abandono y el maltrato animal. Cada adopción es una pequeña victoria que, en conjunto, construye un mundo más compasivo y humano.
  
          Además, adoptar a un perrito no solo impacta positivamente en el bienestar del animal, sino que también aporta beneficios significativos a tu propia vida. La presencia de un compañero peludo no solo brinda alegría y compañía, sino que también fomenta un estilo de vida activo y saludable. En resumen, adoptar a un perrito es un gesto poderoso que trasciende las fronteras de la compasión, contribuyendo a construir un mundo donde cada perrito tenga la oportunidad de experimentar el amor y la felicidad en un hogar lleno de cariño.
        </p>

      <div class="imgIntroduccion">
        <img src="./img/introduccion.jpg" alt="Perritos">
      </div>
    </div>

    <h1 class="titulo">Mas sobre nosotros</h1>
    <div class="cards">

      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./img/1.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Conocenos</p>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./img/3.avif" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Perritos en adopción</p>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./img/4.avif" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Inicia sesión</p>
        </div>
      </div>
      
    </div>
    


  </section>

  <footer>
      &copy; 2023 Adopción Mascotas
  </footer>


  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
      `;
    }
}

customElements.define('my-home', MyElement);
