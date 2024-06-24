let form =document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Succesfully submit");
    location.reload();
});