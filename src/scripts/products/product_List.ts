import { Product } from "./product";

export class ProductList {
  private _items: Product[];
  constructor() {
    this._items = []
  }
  addItem (product: Product) {
    const found = this._items.some(el => el.name === product.name);

    if(found) {
      console.log("Este deja")
    } else {
      this._items.push(product)
    }
  }
  removeItem (product: Product) {
    this._items.splice(this._items.indexOf(product), 1)
  }
  get items() {
    return this._items
  }
}