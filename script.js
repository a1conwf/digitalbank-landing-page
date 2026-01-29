import AOS from "aos";

document.addEventListener("DOMContentLoaded", () => {
	const hamburgerButton = document.querySelector(".hamburger-button");
	const nav = document.querySelector(".nav");
	const closeButton = document.querySelector(".close-button");
	const overlay = document.querySelector(".overlay");

	let resizeTimer;

	AOS.init({ duration: 700, once: true, easing: "ease-out" });

	const setMenuOpen = (isOpen) => {
		if (!hamburgerButton || !nav || !closeButton) return;

		hamburgerButton.classList.toggle("hidden", isOpen);
		closeButton.classList.toggle("hidden", !isOpen);
		document.body.classList.toggle("nav-open", isOpen);
	};

	if (hamburgerButton && closeButton) {
		hamburgerButton.addEventListener("click", () => {
			setMenuOpen(true);
			overlay.classList.remove("hidden");
		});

		closeButton.addEventListener("click", () => {
			setMenuOpen(false);
			overlay.classList.add("hidden");
		});
	}

	window.addEventListener("resize", () => {
		document.body.classList.add("is-resizing");

		window.clearTimeout(resizeTimer);
		resizeTimer = window.setTimeout(() => {
			document.body.classList.remove("is-resizing");
		}, 200);

		if (window.innerWidth > 1024) {
			setMenuOpen(false);
			overlay.classList.add("hidden");
		}
	});
});
