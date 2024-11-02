import { conectaApi } from "./conectarApi.js";
import constroiProduto from "./mostrarProduto.js";

const formulario = document.querySelector("[data-formulario]");
const listaProdutosContainer = document.querySelector(".products");

async function criarProduto(evento) {
  evento.preventDefault();

  const nome = formulario.querySelector("[data-nome]").value;
  const preco = formulario.querySelector("[data-valor]").value;
  const imagem = formulario.querySelector("[data-imagem]").value;

  try {
    await conectaApi.criaProduto(nome, preco, imagem);
    formulario.reset(); // Limpa o formulário após criação
    await carregarProdutos(); // Atualiza a lista de produtos no grid
  } catch (e) {
    alert("Erro ao criar produto: " + e.message);
  }
}

async function carregarProdutos() {
  listaProdutosContainer.innerHTML = ""; // Limpa o grid antes de adicionar produtos
  const produtos = await conectaApi.listaProdutos();
  produtos.forEach((produto) => {
    const produtoElement = constroiProduto(
      produto.name,
      produto.price,
      produto.image
    );
    listaProdutosContainer.appendChild(produtoElement);
  });
}

formulario.addEventListener("submit", criarProduto);

// Carregar produtos ao iniciar a página
carregarProdutos();
