console.log("hello world");

const img = document.querySelector('#img');
img.addEventListener('mouseover', () => {
	alert('Hello gorgeous!')
})


function handleSubmit(evt) {
	evt.preventDefault();
	
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const form = document.querySelector('form')
form.addEventListener('submit', () => {
	alert('Thank you for your response!');
	})

