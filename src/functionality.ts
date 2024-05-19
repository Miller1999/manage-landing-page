export const init = () => {
	// Variables
	const hamburguerButton = document.querySelector<HTMLButtonElement>(
		".header__menu-button"
	);
	const menu = document.querySelector<HTMLDivElement>(".menu");
	const closeButton = document.querySelector<HTMLButtonElement>(
		".menu__button-close"
	);
	const slider = document.querySelector<HTMLDivElement>(
		".testimonial__items-slider"
	);
	const sliderItems =
		document.querySelectorAll<HTMLElement>(".testimonial__item");

	const form = document.querySelector<HTMLFormElement>("form");
	const inputContainer = document.querySelector<HTMLDivElement>(
		".footer__form-containerInput"
	);
	const formButton = document.querySelector<HTMLButtonElement>(
		".footer__form-button"
	);
	const formInput = document.querySelector<HTMLInputElement>(
		".footer__form-input"
	);
	// Variables auxiliares
	const sliderItemsArray = Array.from(sliderItems);
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
			if (window.innerWidth < 1280) {
				slider.style.transform = `translateX(-${
					currentSlide * (window.innerWidth - 16)
				}px)`;
			} else {
				slider.style.transform = `translateX(-${
					currentSlide * sliderItemsArray[0].clientWidth - 16 * 10
				}px)`;
			}
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
	if (window.innerWidth >= 1280) menu?.classList.remove("hidden-menu");
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
