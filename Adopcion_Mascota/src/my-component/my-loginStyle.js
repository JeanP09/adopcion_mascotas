import {css} from 'lit-element';

export default css`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');


body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
  font-family: 'lato', sans-serif;
}

.parrafoLogin {
  margin-top: -20px
}

.parrafoRegister {
  margin-top: -20px
}

.container {
    background-color: purple;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
}

.form {
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}

.title {
  margin-top: 1px;
  font-size: 50px;
  margin-bottom: 44px;
}

.inputContainer {
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
}

.input {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border: 1px solid #DADCE0;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;
}

::placeholder {
  color: transparent;
}

.label {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 4px;
  background-color: white;
  color: #DADCE0;
  font-size: 16px;
  transition: 0.5s;
  z-index: 0;
}

.submitBtn {
  display: block;
  margin-left: auto;
  padding: 15px 30px;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;
}

.submitBtn:hover {
  background-color: #9867C5;
  transform: translateY(-2px);
}

.input:focus + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
  color: purple;
}

.input:focus {
  border: 2px solid purple;
}

.input:not(:placeholder-shown) + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
}
`