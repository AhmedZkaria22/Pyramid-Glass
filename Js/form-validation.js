const form = document.getElementById('form');
const username = document.getElementById('formusername');
const email = document.getElementById('formemail');
const jobtitle = document.getElementById('formjobtitle');
const subject = document.getElementById('formsubject');
const file = document.getElementById('formfile');
const msg = document.getElementById('formmsg');
let allform = false;

form.addEventListener('submit', e => {
	e.preventDefault();	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const jobtitleValue = jobtitle.value.trim();
    const subjectValue = subject.value.trim();
    const fileValue = file.value.trim();
    const msgValue = msg.value.trim();
    

	if(usernameValue === '') { setErrorFor(username, 'The field is required.');     allform = true;
	} else { setSuccessFor(username);     allform = false; }
	
	if(emailValue === '') { setErrorFor(email, 'The field is required.');     allform = true;
	} else if (!isEmail(emailValue)) { setErrorFor(email, 'The e-mail address entered is invalid.');     allform = true;
	} else { setSuccessFor(email);     allform = false; }

    if(jobtitleValue === '') { setErrorFor(jobtitle, 'The field is required.');     allform = true;
	} else { setSuccessFor(jobtitle);     allform = false; }

    if(subjectValue === '') { setErrorFor(subject, 'The field is required.');     allform = true;
	} else { setSuccessFor(subject);     allform = false; }

    if(fileValue === '') { setErrorFor(file, 'The field is required.');     allform = true;        
	} else { setSuccessFor(file);     allform = false; }    

    if(msgValue === '') { setErrorFor(msg, 'The field is required.');     allform = true;
	} else { setSuccessFor(msg);     allform = false; }
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.style.visibility = "visible";
	small.innerText = message;
    if( allform == true ){ $(".formerror").css("display" , "flex"); 
    } else{ $(".formerror").css("display" , "none"); }
}

function setSuccessFor(input) {
    const inpr = input.parentElement;
	const msg = inpr.querySelector('small');
	msg.style.visibility = "hidden";
    if( allform == true ){ $(".formerror").css("display" , "flex"); 
    } else{ $(".formerror").css("display" , "none"); }

}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}