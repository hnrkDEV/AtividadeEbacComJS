const form = document.getElementById('form-deposito');
function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.slipt(" ");
    return nomeComoArray.length >= 2;
}
form.addEventListener('submit', e => {
    e.preventDefault()
    let usuario = {
        nome: document.getElementById("nome-beneficiario").value ,
        agencia: document.getElementById("agencia-deposito").value,
        account: document.getElementById("conta-deposito").value,
        valor: document.getElementById("valor-deposito").value,
        descricao: document.getElementById("descricao").value
    }
    document.getElementById("sucess-message").innerHTML = `Sucesso! <br>O montante de: <b>R$${document.getElementById("valor-deposito").value}
    </b> foi enviado para:<br><b>Cliente:</b>
    ${document.getElementById("nome-beneficiario").value}<br><b>conta:</b> ${document.getElementById("conta-deposito").value}
    <br><b>Descrição do depósito:</b> <br> ${document.getElementById("descricao").value}`         
    console.log(usuario)
    document.getElementById('form-deposito').innerHTML += ""
})


