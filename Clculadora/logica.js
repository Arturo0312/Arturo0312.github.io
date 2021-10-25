
function suma (){
     var element = document.getElementById("operacion");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
      console.log("elemento borrado");
    }


    let txt1 = document.createElement("label");
   txt1.textContent="sumando 1 ";
   document.querySelector("#operacion").appendChild(txt1);

    let elemento1 = document.createElement("input");
    document.querySelector("#operacion").appendChild(elemento1);


    let salto = document.createElement("br");
    document.querySelector("#operacion").appendChild(salto);

    let txt2 = document.createElement("label");
   txt2.textContent="sumando 2 ";
   document.querySelector("#operacion").appendChild(txt2);

    let elemento2 = document.createElement("input");
    document.querySelector("#operacion").appendChild(elemento2);

    let salto2 = document.createElement("br");
    document.querySelector("#operacion").appendChild(salto2);

    let sumar = document.createElement("button");
    sumar.textContent="sumar";
    document.querySelector("#operacion").appendChild(sumar);

    sumar.addEventListener("click", function(){
      let a = parseInt(elemento1.value, 10);
      let b = parseInt(elemento2.value, 10);
      let c = a+b;
      alert("el resultado es: " + c);
    },false)

}

function resta (){
    var element = document.getElementById("operacion");
   while (element.firstChild) {
     element.removeChild(element.firstChild);
     console.log("elemento borrado");
   }


   let txt1 = document.createElement("label");
   txt1.textContent="minuendo ";
   document.querySelector("#operacion").appendChild(txt1);

   let elemento1 = document.createElement("input");
   document.querySelector("#operacion").appendChild(elemento1);

   let salto = document.createElement("br");
   document.querySelector("#operacion").appendChild(salto);

   let txt2 = document.createElement("label");
   txt2.textContent="sustraendo ";
   document.querySelector("#operacion").appendChild(txt2);

   let elemento2 = document.createElement("input");
   document.querySelector("#operacion").appendChild(elemento2);

   let salto2 = document.createElement("br");
   document.querySelector("#operacion").appendChild(salto2);

   let sumar = document.createElement("button");
   sumar.textContent="restar";
   document.querySelector("#operacion").appendChild(sumar);

   sumar.addEventListener("click", function(){
    let a = parseInt(elemento1.value, 10);
    let b = parseInt(elemento2.value, 10);
    let c = a-b;
    alert("el resultado es: " + c);
  },false)

}

function multiplicacion (){
  var element = document.getElementById("operacion");
 while (element.firstChild) {
   element.removeChild(element.firstChild);
   console.log("elemento borrado");
 }


 let txt1 = document.createElement("label");
 txt1.textContent="multiplicando ";
 document.querySelector("#operacion").appendChild(txt1);

 let elemento1 = document.createElement("input");
 document.querySelector("#operacion").appendChild(elemento1);

 let salto = document.createElement("br");
 document.querySelector("#operacion").appendChild(salto);

 let txt2 = document.createElement("label");
 txt2.textContent="multiplicador ";
 document.querySelector("#operacion").appendChild(txt2);

 let elemento2 = document.createElement("input");
 document.querySelector("#operacion").appendChild(elemento2);

 let salto2 = document.createElement("br");
 document.querySelector("#operacion").appendChild(salto2);

 let sumar = document.createElement("button");
 sumar.textContent="multiplicar";
 document.querySelector("#operacion").appendChild(sumar);

 sumar.addEventListener("click", function(){
  let a = parseInt(elemento1.value, 10);
  let b = parseInt(elemento2.value, 10);
  let c = a*b;
  alert("el resultado es: " + c);
},false)

}

function division (){
  var element = document.getElementById("operacion");
 while (element.firstChild) {
   element.removeChild(element.firstChild);
   console.log("elemento borrado");
 }


 let txt1 = document.createElement("label");
 txt1.textContent="dividendo ";
 document.querySelector("#operacion").appendChild(txt1);

 let elemento1 = document.createElement("input");
 document.querySelector("#operacion").appendChild(elemento1);

 let salto = document.createElement("br");
 document.querySelector("#operacion").appendChild(salto);

 let txt2 = document.createElement("label");
 txt2.textContent="divisor";
 document.querySelector("#operacion").appendChild(txt2);

 let elemento2 = document.createElement("input");
 document.querySelector("#operacion").appendChild(elemento2);

 let salto2 = document.createElement("br");
 document.querySelector("#operacion").appendChild(salto2);

 let sumar = document.createElement("button");
 sumar.textContent="dividir";
 document.querySelector("#operacion").appendChild(sumar);

 sumar.addEventListener("click", function(){
  let a = parseInt(elemento1.value, 10);
  let b = parseInt(elemento2.value, 10);
  let c = a/b;
  alert("el resultado es: " + c);
},false)

}


    
