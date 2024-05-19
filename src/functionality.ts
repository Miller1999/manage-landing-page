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
	const form = document.querySelector("form");
	const inputContainer = document.querySelector(".footer__form-containerInput");
	const formButton = document.querySelector(".footer__form-button");
	const formInput: HTMLInputElement | null = document.querySelector(
		".footer__form-input"
	);
	// Variables auxiliares
	const regEx =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
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
	const handleSubmit = (e: Event) => {
		e.preventDefault();
	};
	//Eventos
	hamburguerButton?.addEventListener("click", handleMenu);
	closeButton?.addEventListener("click", handleMenu);
	form?.addEventListener("submit", (e) => {
		handleSubmit(e);
		formButton?.addEventListener("click", (e) => {
			e.preventDefault();
			if (formInput) {
				const email = formInput.value.trim();
				if (!regEx.test(email)) {
					inputContainer?.classList.add("error");
					formInput.focus();
					return false;
				} else {
					inputContainer?.classList.remove("error");
					formInput.value = "";
					alert("Form sent");
					return true;
				}
			}
		});
	});
};
