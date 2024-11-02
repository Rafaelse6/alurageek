export default function constroiProduto(titulo, preco, imagem) {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.innerHTML = `
  <div class="product-image">
    <img src="${imagem}" alt="${titulo}">
  </div>
  <h3>${titulo}</h3>
  <p class="price">${preco}</p>
  <button class="delete-btn"><img src="./icons/trashcan.svg" /></button>
`;
  return productElement;
}
