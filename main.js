const form = document.getElementById('form-deposito'); 
const nomeBeneficiario = document.getElementById("nome-beneficiario")
const valor = document.getElementById('valor-deposito')
const conta = document.getElementById('conta')
let formEvalido = false;
function valorOnlyNumber(){
    const valorValido = document.getElementById('valor-deposito').value
    return valorValido === "number"
} // Estou tentando fazer essa função deixar escrever somente números no valor

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2;
} // Função para validar o nome
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
       const accountNumero = document.getElementById("conta-deposito")
       const valorQuantia = document.getElementById("valor-deposito")
       const descricao = document.getElementById("descricao")
       const mensagemSucesso = `Sucesso! <br>O montante de: <b>R$${valorQuantia.value}</b> foi enviado para:<br>
       <b>Cliente:</b>
       ${nomeBeneficiario.value}<br>
       <b>conta:</b> ${accountNumero.value}<br>
       <b>Descrição do depósito:</b><br> 
       ${descricao.value}`

       formEvalido = validaNome(nomeBeneficiario.value) 
       if(formEvalido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block"
        document.querySelector(".message-error").style.display = "none"
        nomeBeneficiario.style.border = "none";
    //mensagem de sucesso ^
    form.innerHTML += ""
}
    else {
        nomeBeneficiario.style.border = "1px solid red";
        document.querySelector(".message-error").style.display = "block"
        containerMensagemSucesso.style.display = "none"
    }
})

nomeBeneficiario.addEventListener('keypress', function(e) {
    formEvalido = validaNome(e.target.value) 

    if(!formEvalido) {
        nomeBeneficiario.classList.add('error')
        nomeBeneficiario.style.border = "1px solid red";
        document.querySelector(".message-error").style.display = "block"
    }
    else {
        nomeBeneficiario.classList.remove('error')
        nomeBeneficiario.style = " ";
        document.querySelector(".message-error").style.display = "none"
    }
})

/* valor.addEventListener('keypress', function(e){
    valorENumero = valorOnlyNumber(e.target.value)
    if(!valorENumero) {
        console.log('eee')
    }

}) TENTANDO FZER A FUNÇÃO FUNCIONAR */ 



 

