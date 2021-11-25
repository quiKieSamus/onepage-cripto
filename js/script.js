//responsive navbar

const myFunction = () => {
	let navbar = document.getElementById("navbarid");
	if (navbar.className === "navbar") {
		navbar.className += " responsive";
	} else {
		navbar.className = "navbar";
	}
}

//hiding navbar

let prevScrollpos = window.scrollY;

window.onscroll = () => {
	let navbar = document.getElementById("navbarid");
	let currentScrollpos = window.scrollY;
	if (prevScrollpos > currentScrollpos) {
		document.getElementById("navbarid").style.top = "0";
		navbar.className = "navbar";
	} else {
		document.getElementById("navbarid").style.top = "-100px";
		navbar.className = "navbar";
	}
	prevScrollpos = currentScrollpos;
}

const imageClick = (url) => {
	window.open(url, '_blank').focus()
}