console.log("Hello World");

//Get form and button elements by ID
const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');

//Add event listener to form
if (form && submitButton) {
    form.addEventListener('submit', (e) => {
        submitButton.disabled = true;

        //Prevent form's default behavior
        e.preventDefault();

        //Redirect to success page after submission
        window.location.href = 'success.html';
    });
} else {
    console.error('Submit button not found');
}



