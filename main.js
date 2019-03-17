var formValue = document.querySelector('#text-input').value ;
// var titleText = document.querySelector('#replace-text') ;
var titleText = document.getElementById("replace-text").innerHTML ;
var submitButton = document.querySelector('#get-input').value ;
// submitButton addEventListener("click", someDogs) ;

function someDogs() {
	// Event.preventdefault() ;
	titleText.innerHTML = `${formValue}` ;
}
