let imc
function Calcular(){
    let peso = Number(document.getElementById("txt_peso").value);
    let estatura = Number(document.getElementById("estatura").value);
    imc = peso / (estatura*estatura);
    document.getElementById("imc_res").innerText = imc;

    if (imc < 18.5){
        let imagen = document.getElementById("pic");
        imagen.src ="img/bajo.jpg";
        document.getElementById("estatus").innerText = "Bajo peso";

    }else if(imc >= 18.5 && imc <25){
        let imagen = document.getElementById("pic");
        imagen.src ="img/normal.jpg";
        document.getElementById("estatus").innerText = "Normal";

    }else if(imc >= 25 && imc < 30){
        let imagen = document.getElementById("pic");
        imagen.src ="img/sobre.jpg";
        document.getElementById("estatus").innerText = "Sobre peso";

    }else if(imc >= 30 && imc < 40){
        let imagen = document.getElementById("pic");
        imagen.src ="img/obesidad.jpg";
        document.getElementById("estatus").innerText = "Obesidad";

    }else if(imc >=  40){
        let imagen = document.getElementById("pic");
        imagen.src ="img/obesidad.jpg";
        document.getElementById("estatus").innerText = "Obesidad crónica";
    }

}

