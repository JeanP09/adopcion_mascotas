import {css} from 'lit-element';

export default css`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto&display=swap');


* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
}

.content {
    text-align: center;
    width: 1100px;
    margin: 0 auto;
    padding: 20px 0;
}


.clearfix {
    clear: both;
    float: none;
}

header {
    width: 100%;
    background-color: #96543E;
    height: 100px;
}

header img {
    float: left;
    height: 80%;
    width: auto;
}

.logo_huella {
    height: 60px;
}

nav {
    float: right;
}

nav a {
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    line-height: 60px;
    font-weight: bold;
    border-radius: 5px;
    transition: all 1s;
}

nav a:hover {
    background: white;
    color: #96543E;
}



#carouselExampleIndicators {
    max-width: 800px; /* Ajusta según sea necesario */
    margin: auto; /* Centra el carrusel en la página */
}

/* Establece un tamaño fijo para las imágenes dentro del carrusel */
#carouselExampleIndicators img {
    width: 100%;
    height: auto;
}

/* Opcional: Ajusta la altura del carrusel según sea necesario */
#carouselExampleIndicators .carousel-inner {
    height: 400px; /* Ajusta según sea necesario */
}

h1, h2 {
    line-height: 70px;
    
}

.titulo, h2{
    text-align: center;
    padding-top: 30px;
}

.introduccion{
    display: flex;
    margin-left: 15vh;
}

.mansajeInicio{
    text-align: justify;
    padding-top: 25px;
    
}

.imgIntroduccion{
    display: flex;
    width: 330px;
    height: 330px;
    margin-left: 12vh;
    margin-right: 15vh;
    margin-top: 37px;
}

.cards{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    margin-left: 45px;
    margin-right: 45px;
    
}

.card{
    display: flex;
    background-color: #96543E;
    font-family: 'Roboto', sans-serif;
    color: aliceblue;
    font-weight: bold;
    border-radius: 5px;
    transition: all 1s;

}

.card-text{
    text-align: center;
}


footer {
    width: 100%;
    background: #4e4747;
    color: white;
    padding: 40px 0;
    text-align: center;
}



`