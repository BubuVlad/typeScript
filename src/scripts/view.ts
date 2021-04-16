import { Product } from "./products/product";
import { ProductList } from "./products/product_List";

function blockTemplate (item: Product) {
  let itemBlock = document.createElement('div');
  itemBlock.classList.add('item')
  let title = document.createElement('h3');
  let description = document.createElement('p');
  let imageContainer = document.createElement('div');
  let image = document.createElement('img');
  image.setAttribute('src', item.image)
  image.setAttribute('alt', item.name) 
  title.innerText = item.name;
  description.innerText = item.description;
  itemBlock.appendChild(title);
  itemBlock.appendChild(imageContainer);
  imageContainer.appendChild(image)
  itemBlock.appendChild(description);

  return itemBlock
}

function populateDom(listOfItems: ProductList, productsContainer: string) {
  const container = document.getElementById(productsContainer)
  listOfItems.items.forEach((el: Product) => {container.appendChild(blockTemplate(el))});
}

export {blockTemplate, populateDom}