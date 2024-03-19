// Funny little thing with the title of the page
let docTitle = document.title;
window.addEventListener("blur", () => {
	const op = ["✨Sua casa de Sonho✨"];
	const chance = Math.floor(Math.random() * op.length);
	const resop = op[chance];
	document.title = resop;
})
window.addEventListener("focus", () => {
	document.title = docTitle;
})

// Funny little thing with the title of the page
/* document.addEventListener("DOMContentLoaded", function () {
	const originalTitle = document.title;
	const len = originalTitle.length;
	let typedTitle = "";
	let index = 0;
	let reverse = false;
	let pause = true;

	document.title = "";

	function writeTitle() {
		if (!reverse && index < len) {
			const char = originalTitle.charAt(index);
			typedTitle += char;
			document.title = typedTitle;
			index++;
		} else if (pause && !reverse) {
			setTimeout(() => {
				pause = false;
				reverse = true;
			}, 4000);
		} else if (index > 0) {
			const char = originalTitle.charAt(index - 1);

			typedTitle = typedTitle.substring(0, typedTitle.length - 1);
			// If the last character was a space just add a " " space
			if (char === " ") document.title = typedTitle + " ";
			else document.title = typedTitle;
			index--;
			reverse = true;
		} else {
			reverse = false;
		}
		setTimeout(writeTitle, 350);
	}

	writeTitle();
}); */
