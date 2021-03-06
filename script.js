const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
var s = 0
var x=1
function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username can't be blank');
	} else {
        setSuccessFor(username);
        final(x)
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email can't be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email id');
	} else {
        setSuccessFor(email);
        final(x)
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password can't be blank');
	} else {
        setSuccessFor(password);
        final(x)
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password 2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
        setSuccessFor(password2);
        final(x)
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function final(x){
    s += x
    if(s==4)
        document.getElementById('h2').innerHTML = "Form validation done !!"
}
