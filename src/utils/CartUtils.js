export function getCartTotal(cart) {
  return cart.reduce((total, item) => {
    return total + (item.preco * item.quantity);
  }, 0);
}