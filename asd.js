document.addEventListener("DOMContentLoaded", function () {
	const originalTitle = document.title;
	let typedTitle = "";
	let index = 0;
	let isTyping = true;
	let isPaused = false;

	document.title = "";

	function typeTitle() {
		if (isTyping && index < originalTitle.length) {
			const char = originalTitle.charAt(index);
			typedTitle += char === " " ? "&nbsp;" : char;
			document.title = typedTitle;
			index++;
		} else if (isTyping && index === originalTitle.length) {
			isTyping = false;
			setTimeout(pauseTitle, 200); // Pause for 200 milliseconds
		} else if (!isTyping && isPaused) {
			isPaused = false;
			setTimeout(reverseTitle, 200); // Delay before reversing animation (milliseconds)
		}

		setTimeout(typeTitle, 100); // Adjust typing speed (milliseconds)
	}

	function pauseTitle() {
		isPaused = true;
	}

	function reverseTitle() {
		if (index > 0) {
			const char = originalTitle.charAt(index - 1);
			typedTitle = typedTitle.substring(0, typedTitle.length - 1);
			if (char === " ") {
				// If the last character was a space, replace it with a regular space
				document.title = typedTitle + " ";
			} else {
				document.title = typedTitle;
			}
			index--;
		} else {
			isTyping = true;
			index = 0;
			typedTitle = "";
		}
	}

	typeTitle();
});
