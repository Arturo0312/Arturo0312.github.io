let screen = document.querySelector('#screen-result');

function getData(ref){
    let value = ref.value;
    screen.value += value;
}

function clean(){
    screen.value = '';
}

function calculate(){
    let apagador = document.querySelector('input[name = "switch"]:checked').value;
    if(apagador == "1"){

        try {
            screen.value = eval(screen.value);
        } catch (error) {
            screen.value = 'Error';
            setTimeout(() => {
                clean();
            }, 500);
        }
    }else{
        alert("La calculadora esta apagada");
    }
}