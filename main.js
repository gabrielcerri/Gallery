const modal = document.getElementById("modalGallery")
const modalImg = document.getElementById("img")
const captionText = document.getElementById("cap")
var span = document.getElementsByClassName("close")[0];


function moreInfo (element) {
	

	let eachImg = element.src

	modal.style.display = "block";
 	modalImg.src = element.src;
  	captionText.innerHTML = element.alt;
	
}





span.onclick = function() {
  modal.style.display = "none";
}

window.onkeydown = function () {
	if (event.key === "Escape" ) {
		  modal.style.display = "none";

	}
}
