import { addFormProduct, getDataAndCreateInitialList } from "./scripts/controller";
// import { createFormBasedOnProductProperties } from "./scripts/view";

// createFormBasedOnProductProperties();
getDataAndCreateInitialList();

const addButton = document.getElementById('add-btn');
const formFields = document.querySelectorAll('.form-product input');
addButton.addEventListener('click', function() {
  addFormProduct(formFields)
})
