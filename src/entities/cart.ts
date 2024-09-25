import { Product } from "./product";

export class Cart {
  private static _products: Product[] = [];
  private static _total: number = 0;

  static addToCart(product: Product) {
    // Atualiza o valor total da compra
   this._total += product.total;

    // Adiciona o produto ao carrinho
    this._products.push(product);
  }

  static get products() {
    return this._products;
  }

  static get total() {
    return this._total;
  }
}
