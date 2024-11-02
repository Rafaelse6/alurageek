async function listaProdutos() {
  const conexao = await fetch("http://localhost:3001/products");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function criaProduto(titulo, preco, imagem) {
  const conexao = await fetch("http://localhost:3001/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: titulo,
      price: preco,
      image: imagem,
    }),
  });

  if (!conexao.ok) {
    throw new Error("Não foi possível criar o produto");
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

export const conectaApi = {
  listaProdutos,
  criaProduto,
};
