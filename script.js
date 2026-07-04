// ================= DARK MODE =================

const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {
	darkBtn.addEventListener("click", function () {
		document.body.classList.toggle("dark");
	});
}


// ================= LIVE SEARCH =================

const search = document.getElementById("search");

if (search) {

	search.addEventListener("keyup", function () {

		let value = search.value.toLowerCase();

		let cards = document.querySelectorAll(".card");

		cards.forEach(function (card) {

			let text = card.innerText.toLowerCase();

			if (text.includes(value)) {
				card.style.display = "block";
			} else {
				card.style.display = "none";
			}

		});

	});

}


// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

	window.addEventListener("scroll", function () {

		if (window.scrollY > 200) {
			topBtn.style.display = "block";
		} else {
			topBtn.style.display = "none";
		}

	});

	topBtn.addEventListener("click", function () {

		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});

	});

}


// ================= MOBILE MENU =================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

if (menuIcon && navLinks) {

	menuIcon.addEventListener("click", function () {

		navLinks.classList.toggle("active");

	});

}


// ================= TYPING ANIMATION =================

const typing = document.getElementById("typing");

if (typing) {

	const text = "100+ Free Online Tools";

	let i = 0;

	function typeWriter() {

		if (i < text.length) {

			typing.innerHTML += text.charAt(i);

			i++;

			setTimeout(typeWriter, 80);

		}

	}

	typeWriter();

}
// ================= HERO SLIDER =================

const titles = [

"100+ Free Online Tools",

"Fast & Secure Online Tools",

"100% Free For Everyone",

"SmartToolsHub"

];

const texts = [

"All Your Daily Tools In One Place",

"No Signup Required",

"Simple • Fast • Secure",

"Made For Students & Professionals"

];

let current = 0;

const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");

if(heroTitle && heroText){

setInterval(function(){

current++;

if(current >= titles.length){

current = 0;

}

heroTitle.innerHTML = titles[current];

heroText.innerHTML = texts[current];

},3000);

}