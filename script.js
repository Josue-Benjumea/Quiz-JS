
function printCarnet() {
  let name = prompt("Cual es tu nombre?")
  let lastname = prompt("Cual es tu Apellido?")
  let age = prompt("Cual es tu edad?")
  let position = prompt("Cual es cargo?")
  let RH = prompt("Cual es tu RH")
  let cc = prompt("Cual es tu numero de cedula?")
  let tel = prompt("Cual es tu numero de celular?")

  if(name!==0){
    document.getElementById("name").innerHTML = `<h2> Nombre: ${name} ${lastname}</h2>`

        console.log(document.getElementById("name").innerHTML) 
  }
  if(age!==0){
    document.getElementById("age").innerHTML = `<h2> Edad: ${age}</h2>`

        console.log(document.getElementById("age").innerHTML) 
  }
  if(position!==0){
    document.getElementById("position").innerHTML = `<h2> Cargo: ${position}</h2>`

        console.log(document.getElementById("position").innerHTML) 
  }
  if(RH!==0){
    document.getElementById("RH").innerHTML = `<h2> RH: ${RH}</h2>`

        console.log(document.getElementById("RH").innerHTML) 
  }
  if(cc!==0 && cc !==""){
    document.getElementById("cc").innerHTML = `<h2> N. de cedula: ${cc}</h2>`

        console.log(document.getElementById("cc").innerHTML) 
  }
  if(tel!==0){
    document.getElementById("tel").innerHTML = `<h2> Celular: ${tel}</h2>`

        console.log(document.getElementById("tel").innerHTML) 
  }
  return "valor invalido"
  
  

  }

  function addt(m, n) {
    return m + n;
  }
  function subt(c, d) {
    return c - d;
  }
  function multi(e, f) {
    return e * f;
  }
  function divide(g, h) {
    return g / h;
  }
  function mod(i, j) {
    return i % j;
  }
  
  function calculator() {
    let a = prompt("Ingrese el primer numero" )
    alert("las operaciones posibles son suma= + resta = - multiplicar = x dividir = / modulo = %")
    let operation = prompt("Que operacion va a realizar?")
    let b = prompt("Ingrese el segundo numero")
    a = Number(a)
    b = Number(b)
    if (operation === "+") {
      document.getElementById("result").innerHTML = `<h2> El resultado de la suma es  ${addt(a,b)}</h2>`

      console.log(document.getElementById("result").innerHTML) 

    }
    if (operation === "-") {
      document.getElementById("result").innerHTML = `<h2> El resultado de la resta es   ${subt(a,b)}</h2>`

      console.log(document.getElementById("result").innerHTML) 
    }
    if (operation === "x") {
      document.getElementById("result").innerHTML = `<h2> El resultado de multiplicacion es  ${multi(a,b)}</h2>`

      console.log(document.getElementById("result").innerHTML) 
    }
    if (operation === "/" && a && b !==0) {
      document.getElementById("result").innerHTML = `<h2> El resultado de la division es  ${divide(a,b)}</h2>`

      console.log(document.getElementById("result").innerHTML) 
    }
    if (operation === "%" && a && b !==0) {
      document.getElementById("result").innerHTML = `<h2> El resultado del modulo es   ${mod(a,b)}</h2>`

      console.log(document.getElementById("result").innerHTML) 
    
  }
}


const botonNumeros = document.getElementsByName("number")
const botonOpera = document.getElementsByName("opera")
const botonIgual = document.getElementsByName("igual")[0]
const botonDelete = document.getElementsByName("delete")[0]
let result = document.getElementById("resultado")
let opeActual = ""
let opeAnterior = ""
let operacion = ""

botonNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText)

    })
})

botonOpera.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOperacion(boton.innerText)
    })
})


botonIgual.addEventListener("click" , function(){
    calcular()
    Display()
})

botonDelete.addEventListener("click", function(){
    clear()
    Display()
})

function selectOperacion(op){
    if(opeActual === "") return;
    if(opeAnterior !== ""){
        calcular()
    }
   operacion = op.toString()
   opeAnterior = opeActual
   opeActual =""
}

function calcular(){
    let calcu
    const anterior = parseFloat(opeAnterior)
    const actual = parseFloat(opeActual)
    if(isNaN(anterior) || isNaN(actual)) return
    switch(operacion){
        case "+":
        calcu = anterior + actual
        break;
        case "-":
            calcu = anterior - actual
            break;
            case "X":
            calcu = anterior * actual
            break;
            case "/":
                calcu = anterior / actual
                break;
                default:
                    return;
                    
    }
    opeActual = calcu
    operacion = undefined
    opeAnterior =  ""
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString()
    Display();

}

function clear(){
    opeActual = ""
    opeAnterior = ""
    operacion = undefined
}


function Display(){
    result.value = opeActual;
}
 clear()
  
  