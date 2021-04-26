import { ProductProps, ProductViewData } from "./products/interfaces";
import { Product } from "./products/product";
import { ProductList } from "./products/product_List";
import { populateDom, renderNewProduct } from "./view";

const allProductList = new ProductList()

function appInit() {
  getDataAndCreateInitialList();
  addFormProduct()
}

//GET LocalStorage data
function getDataAndCreateInitialList () {

  //Bring localStorage
  const dataProdFromLocalStorage = JSON.parse(localStorage.getItem('products'));

  //Parsing localstorage data to domain data
  const dataProd = dataProdFromLocalStorage?.map((props:ProductProps) => {
    return new Product(props)
  });

  //add items to list
  dataProd?.forEach((product:Product) => {
    allProductList.addItem(product)
  });

  populateDom(allProductList, removeProduct);
}


//Update dom and localstorage
function updateLocalstorageAndRender () {
   //update LocalStorage
   localStorage.clear();
   localStorage.setItem('products', JSON.stringify(allProductList.items))
 
   //update View
   populateDom(allProductList, removeProduct);
}

//Remove Product
function removeProduct(item:Product) {
  allProductList.removeItem(item);
  updateLocalstorageAndRender();
}


//todo move to an Utils place
function getRandomId() {
  const rand = Math.random();
  return Math.floor(rand * 10000);
}

function createProduct(productData: ProductViewData) : void  {
  const { name, description, type, image }  = productData;
  const newProduct =  new Product({
    id: getRandomId(),
    name,
    description,
    type,
    image
  })

  allProductList.addItem(newProduct);
  updateLocalstorageAndRender();
}

// Add the product from form
function addFormProduct () {
  renderNewProduct(createProduct);
}

export { appInit }