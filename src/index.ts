
import { populateDom } from "./scripts/view";
import { Product } from "./scripts/products/product";
import { ProductList } from "./scripts/products/product_List";

const product1 = new Product({
  id: 1,
  name: "Lego",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  description: "Best for plenty.",
  type: "simple"
})
const product2 = new Product({
  id: 2,
  name: "Batman",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  description: "Best for plenty.",
  type: "simple"
})
const product3 = new Product({
  id: 3,
  name: "Robin",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  description: "Best for plenty.",
  type: "simple"
})
const product4 = new Product({
  id: 4,
  name: "Joker",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  description: "Best for plenty.",
  type: "simple"
})


const list = new ProductList();
list.addItem(product1);
list.addItem(product2);
list.addItem(product3);
list.addItem(product4);
list.addItem(product2);
list.addItem(product3);
list.addItem(product4);
const listClone = [...list.items];
console.log("List initial: ",listClone)
list.removeItem(product2);
console.log("List after remove: ",list)
list.addItem(product2);
populateDom(list, 'productList');




