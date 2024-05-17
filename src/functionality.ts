export const init = () => {
	// Variables
	const hamburguerButton = document.querySelector(".header__menu-button");
	const menu = document.querySelector(".menu");
	const closeButton = document.querySelector(".menu__button-close");
	const slider: HTMLElement | null = document.querySelector(
		".testimonial__items-slider"
	);
	const sliderItems = document.querySelectorAll(".testimonial__item");
	const sliderItemsArray = Array.from(sliderItems);
	console.log(sliderItemsArray);
	let currentSlide = 0;

	//Funciones
	const handleMenu = () => {
		menu?.classList.toggle("hidden-menu");
		hamburguerButton?.classList.toggle("hidden");
	};
	const updateSliderPosition = () => {
		if (slider) {
			slider.style.transform = `translateX(-${
				currentSlide * (window.innerWidth - 16)
			}px)`;
			slider.style.transition = "all .5s";
		}
	};

	const nextSlide = () => {
		currentSlide = (currentSlide + 1) % sliderItemsArray.length;
		updateSliderPosition();
	};

	setInterval(nextSlide, 5000);
	//Eventos
	hamburguerButton?.addEventListener("click", handleMenu);
	closeButton?.addEventListener("click", handleMenu);
};
