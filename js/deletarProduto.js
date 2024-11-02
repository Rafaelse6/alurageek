export default function deletarProduto(event) {
  event.preventDefault();

  const button = event.currentTarget;

  const productElement = button.closest(".product");

  if (productElement) {
    productElement.remove();
  }
}
