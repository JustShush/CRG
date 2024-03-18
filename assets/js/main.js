// Funny little thing with the title of the page
/* let docTitle = document.title;
window.addEventListener("blur", () => {
	const op = ['Come Back!', "Já se decidiu?", "Foi "];
	const chance = Math.floor(Math.random() * op.length);
	const resop = op[chance];
	document.title = resop;
})
window.addEventListener("focus", () => {
	document.title = docTitle;
}) */

// Funny little thing with the title of the page
document.addEventListener("DOMContentLoaded", function () {
	const originalTitle = document.title;
	let index = 0;
	let reverse = false;
  
	document.title = "";
  
	function typeTitle() {
	  if (!reverse && index < originalTitle.length) {
		document.title += originalTitle.charAt(index);
		index++;
	  } else if (index > 0) {
		document.title = originalTitle.substring(0, index);
		index--;
		reverse = true;
	  } else {
		reverse = false;
	  }
	  
	  setTimeout(typeTitle, 100); // Adjust typing speed (milliseconds)
	}
  
	typeTitle();
  });
  
