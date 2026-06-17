export function getCartTotal(cart) {
  return cart.reduce((total, item) => {
    // Mudamos de item.price para item.preco
    return total + (item.preco * item.quantity);
  }, 0);
}