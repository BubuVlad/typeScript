// import { ProductProps } from "./products/interfaces";
import { Product } from "./products/product";
import { ProductList } from "./products/product_List";
// import { allProductList } from "./controller";

function blockTemplate (item: Product, onRemoveRequested:(item:Product) => void) {
  let itemBlock = document.createElement('div');
  itemBlock.classList.add('item')
  let title = document.createElement('h3');
  let description = document.createElement('p');
  let imageContainer = document.createElement('div');
  let image = document.createElement('img');
  let removeBtn:HTMLButtonElement = document.createElement('button');
  image.setAttribute('src', item.image)
  image.setAttribute('alt', item.name) 
  title.innerText = item.name;
  description.innerText = item.description;
  itemBlock.appendChild(title);
  itemBlock.appendChild(imageContainer);
  imageContainer.appendChild(image)
  itemBlock.appendChild(description);
  removeBtn.innerHTML = 'Remove';
  removeBtn.classList.add('remove_btn');
  removeBtn.addEventListener('click', function() {
    onRemoveRequested(item);
  });
  itemBlock.appendChild(removeBtn)
  return itemBlock
}

function populateDom(listOfItems: ProductList, productsContainer: string, onRemoveRequested:(item:Product) => void) {
  const container = document.getElementById(productsContainer)
  //Reset content of container
  container.innerHTML = "";
  //Populate with products
  listOfItems.items.forEach((el: Product) => {container.appendChild(blockTemplate(el, onRemoveRequested))});
}

// function createFormBasedOnProductProperties () {
//   // const productPropertiesFields = Object.getOwnPropertyNames(Product);
//   // console.log('Product class: ', productPropertiesFields);
//   // const keysProduct = (new Product).__proto__
//   // const propertiesOfProduct = Array.from(Product.prototype).map((el:string) => el);
//   const propertiesOfProduct = new Array(Product.prototype);
//   const pr = Object.keys(Product);
//   const rp = Object.getPrototypeOf(Product)
//   // const newTry = new Product();
//   // console.log(newTry)
//   console.log('Product.prototype: ', Product.prototype)
//   console.log('Keys: ', pr)
//   console.log('getPrototypeOf: ', rp)
//   console.log('Product class: ', propertiesOfProduct);
// }

export { blockTemplate, populateDom }