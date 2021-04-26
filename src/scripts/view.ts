import { ProductViewData } from "./products/interfaces";
import { Product } from "./products/product";
import { ProductList } from "./products/product_List";

//Get Value Input from Form
function getValueInput (data:NodeListOf<Element>):ProductViewData {
  let objTemplate: any = {};
  data.forEach((el:HTMLInputElement) => {

    let propName = el.name;

    objTemplate[propName] = el.value
  })

  return objTemplate as ProductViewData;
}

//VALIDATOR
function validateAddFormData (data:ProductViewData):Boolean {
  const { name, description, type, image } = data;

  //name min 2 max 15
  //descr5iption min 5 max 225
  //type must be Mobile sau Jucarie
  //image must be a valid url

  if (name.length < 2) {
    return false;
  }
  
  let result = true;


  return result
}

function renderNewProduct(onCreateRequested: (productData: ProductViewData) => void) {
  const addButton = document.getElementById('add-btn');
  const formFields = document.querySelectorAll('.form-product input');
  
  addButton.addEventListener('click', () => {
    const productData = getValueInput(formFields);
    //validate product data based on rules
    validateAddFormData(productData)
    onCreateRequested(productData);
  })
}

function blockTemplate (item: Product, onRemoveRequested:(item:Product) => void) {
  const itemBlock: HTMLDivElement = document.createElement('div');
  const title: HTMLHeadingElement = document.createElement('h3');
  const description:HTMLParagraphElement = document.createElement('p');
  const imageContainer:HTMLDivElement = document.createElement('div');
  const image: HTMLImageElement = document.createElement('img');
  const removeBtn:HTMLButtonElement = document.createElement('button');

  //add extra data to html elements
  itemBlock.classList.add('item')
  image.setAttribute('src', item.image)
  image.setAttribute('alt', item.name) 
  title.innerText = item.name;
  description.innerText = item.description;
  removeBtn.innerHTML = 'Remove';
  removeBtn.classList.add('remove_btn');

  //actually add to html
  itemBlock.appendChild(title);
  itemBlock.appendChild(imageContainer);
  imageContainer.appendChild(image)
  itemBlock.appendChild(description);

  removeBtn.addEventListener('click', function() {
    onRemoveRequested(item);
  });

  itemBlock.appendChild(removeBtn)

  return itemBlock
}

//we go to controller and make a transformer from ProductList to Array<ProductViewData>
// Array<ProductViewData>
function populateDom(listOfItems: ProductList, onRemoveRequested:(item:Product) => void) {
  const container = document.getElementById('productList')
  //Reset content of container
  container.innerHTML = "";
  //Populate with products
  listOfItems.items.forEach((el: Product) => {container.appendChild(blockTemplate(el, onRemoveRequested))});
}

export { populateDom, renderNewProduct }