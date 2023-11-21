import { css } from 'lit-element';

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

.half {
    width: 50%;
    float: left;
    text-align: center;
}

.half img {
    width: 100%;
    height: auto;
}

.half h1 {
    line-height: 70px;
}

.btn-adopt {
    background-color: #96543E;
    color: white;
    padding: 10px 20px;
    margin-top: 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 1.5s;
}

.btn-adopt:hover {
    background-color: #000000;
    color: white;
}

.content_dog {
    width: 1200px;
    margin: 0 auto;
    background: #EEE;
    display: flex;
    align-items: center;
}

.content_dog p {
    margin: 25px;
}

.description {
    width: 100%;
    background: #EEE;
    padding: 70px 0;
    text-align: center;
}

.description h1 {
    line-height: 50px;
}

.description h3 {
    line-height: 50px;
}

.description p {
    line-height: 30px;
    margin: 25px;
}

.sobreNosotros {
    width: 980px;
    list-style: none;
    margin: 0 auto;
}

.sobreNosotros li {
    float: left;
    width: 200px;
    height: 160px;
    text-align: center;
    background: #96543E;
    color: white;
    margin: 20px;
    border-radius: 5px;
}

.sobreNosotros li img {
    height: 70px;
    width: auto;
    margin: 20px auto;
    display: block;
}

.direcc {
    text-decoration: none;
    color: white;
}

footer {
    width: 100%;
    background: #4e4747;
    color: white;
    padding: 40px 0;
    text-align: center;
}
`