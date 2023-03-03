//definições de constantes

const formulario = document.querySelector('form'); //pega o form
const nome = document.querySelector('#nome'); //pega o nome
const sobrenome = document.querySelector('#sobrenome'); //pega o sobrenome
const login = document.querySelector('#login'); //login
const senha = document.querySelector('#senha'); //senha
const confirmaSenha = document.querySelector('#confirma-senha'); //confirma senha.

formulario.addEventListener('submit', (e) => { //tratamento de evento (submit)
  e.preventDefault(); //evita o envio da página

  if (senha.value !== confirmaSenha.value) { //validação de senha
    alert('As senhas não coincidem!');
    return;
  }

  const usuario = { //usuario
    nome: nome.value,  //nome
    sobrenome: sobrenome.value, //sobrenome
    login: login.value, //login
    senha: senha.value //senha
  };

  //localStorage 

  localStorage.setItem('usuario', JSON.stringify(usuario));

  alert('Cadastro realizado com sucesso!');
}); //esse parâteses representa o fim do ouvinte (evento)
