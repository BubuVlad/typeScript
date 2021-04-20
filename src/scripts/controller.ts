import { ProductData, ProductProps } from "./products/interfaces";
import { Product } from "./products/product";
import { ProductList } from "./products/product_List";
import { populateDom } from "./view";

const allProductList = new ProductList()

//VALIDATOR
function validateAddFormData (data:NodeListOf<Element>):Boolean {
  let result = true;

  data.forEach((el:HTMLInputElement) => {
    console.log('validateAdd', el)
    if(el.value === '') {
      result = false;
    }
  })

  return result
}

//Get Value Input from Form
function getValueInput (data:NodeListOf<Element>):ProductData {
  let objTemplate:ProductData = {};
  data.forEach((el:HTMLInputElement) => {

    let propName = el.name;

    objTemplate[propName] = el.value
  })

  return objTemplate;
}

//GET LocalStorage data
function getDataAndCreateInitialList () {
  // const list = new ProductList();

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

  populateDom(allProductList, 'productList');
}

// Add the product from form
function addFormProduct () {

  const formFields = document.querySelectorAll('.form-product input');
  let newObjData:ProductData;
  const isValid = validateAddFormData(formFields);
  if (isValid) {

    //Create new Product
    newObjData = getValueInput(formFields);

    // instantiate and send data
    allProductList.addItem(new Product({
      name: newObjData.name,
      id: allProductList.items.length + 1,
      image: newObjData.image,
      description: newObjData.description,
      type: newObjData.type,
    }))
  } else {
    //show user error
    prompt ('Please fill all fields')
  }

  //update LocalStorage
  localStorage.clear();
  localStorage.setItem('products', JSON.stringify(allProductList.items))
  console.log('List: ', allProductList)


  //update View
  populateDom(allProductList, 'productList');
}

export { validateAddFormData, getValueInput, getDataAndCreateInitialList, addFormProduct }