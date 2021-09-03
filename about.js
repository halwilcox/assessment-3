console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	alert('submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', () => {
	alert('Hey Gorgeous!')
})