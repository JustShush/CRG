// Funny little thing with the title of the page
let docTitle = document.title;
window.addEventListener("blur", () => {
	document.title = "Come back!";
})
window.addEventListener("focus", () => {
	document.title = docTitle;
})
