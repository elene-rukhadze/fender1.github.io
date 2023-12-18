const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

document.getElementById("about-link").addEventListener("click", function () {
	window.scrollBy({
		top: (98 * window.innerHeight) / 100,
		behavior: "smooth",
	});
});
