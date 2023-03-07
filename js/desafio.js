const formulario = document.querySelector("form");
const imgUnidade = document.querySelector("#unidade");
const divTitulo = document.querySelector("#divTitulo");

const trocarUnidade = () => {
  let unidade

  if (formulario.rbTaguatinga.checked) {
    unidade = "Taguatinga"
  } else if (formulario.rbBrasilia.checked) {
    unidade = "Brasilia"
  } else if (formulario.rbSobradinho.checked) {
    unidade = "Sobradinho"
  } else {
    unidade = "Gama"
  }


  imgUnidade.src = `img/${unidade.toLowerCase()}.png`
  imgUnidade.className = "img-fluid"
  imgUnidade.alt = `Imagem da Unidade Senai de ${unidade}`

  localStorage.setItem("unidade", unidade)

}

formulario.rbTaguatinga.addEventListener("change", trocarUnidade)
formulario.rbBrasilia.addEventListener("change", trocarUnidade)
formulario.rbGama.addEventListener("change", trocarUnidade)
formulario.rbSobradinho.addEventListener("change", trocarUnidade)

const verificaUnidade = () => {
  if (localStorage.getItem("unidade")) {
    const unidade = localStorage.getItem("unidade")

    if (unidade == "Taguatinga") {
      formulario.rbTaguatinga.checked = true
    } else if (unidade == "Brasilia") {
      formulario.rbBrasilia.checked = true
    } else if (unidade == "Gama") {
      formulario.rbGama.checked = true
    } else {
      formulario.rbSobradinho.checked = true
    }
    trocarUnidade()
  }
}

window.addEventListener("load", verificaUnidade)