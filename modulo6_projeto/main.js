const form = document.getElementById('inf-value');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const val1 = document.getElementById("valorA").value;
    const val2 = document.getElementById("valorB").value;
    const mensagemSucesso = `O valor ${valorA.value} <b>(A)</b> é maior que o ${valorB.value} <b>(B)</b>. Parabéns!`;

    if(val1 > val2){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        
    } else{
        document.querySelector('.error-message').style.display = 'block';  
    }    
});

