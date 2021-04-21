import { addFormProduct, getDataAndCreateInitialList } from "./scripts/controller";


getDataAndCreateInitialList();
const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', addFormProduct)


// populateDom(list, 'productList');
