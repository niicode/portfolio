function storeFormField(e) {
  /* eslint-disable */
  const field = e.target.dataset.field;
  /* eslint-enable  */
  // get the form fields
  const fieldValue = document.getElementById(field).value;
  // unserialize form object from local storage
  const formFields = JSON.parse(localStorage.getItem('formObject'));
  // update name field in formfields object
  formFields[field] = fieldValue;
  // serialize form object to local storage
  localStorage.setItem('formObject', JSON.stringify(formFields));
}