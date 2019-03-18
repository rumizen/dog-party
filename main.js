var formValue = document.querySelector('#text-input') ;
var titleText = document.getElementById("replace-text") ;
var submitButton = document.querySelector('#get-input') ;
submitButton.addEventListener("click", someDogs) ;

function someDogs(e) {
	// event.preventDefault() ;
	titleText.innerHTML = `${formValue.value}` ;
	if (formValue.value == "") {
		titleText.innerHTML = "Some Dogs" ;
	} ;
}

