var cadastrar = document.getElementById('cadastro')

    cadastrar.addEventListener('click', clicar)
    cadastrar.addEventListener('mouseenter', entrar)
    cadastrar.addEventListener('mouseout', sair)

function clicar(){
    cadastrar.innerText = "Redirecionando..."
}

function entrar(){
    cadastrar.innerText = "Cadastrar?"
}

function sair(){
    cadastrar.innerText = "Se cadastrar!"
}