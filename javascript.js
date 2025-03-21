console.log("Hello World");

//Get form and button elements by ID
const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

//Add event listener to form
form.addEventListener('submit', (e) => {
  submitButton.disabled = true

    //Prevent form's default behavior
  e.preventDefault()

  //Redirect to success page after submission
  window.location.href = window.location.origin + '/success.html'
})