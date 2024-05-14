import Logo from "./assets/logo.svg";
import Background from "./assets/bg-tablet-pattern.svg";
import PresentationImage from "./assets/illustration-intro.svg";

const createElement = (
	tagName: string,
	className: string = "",
	html: string = "",
	attributes: { [key: string]: string } = {}
): HTMLElement => {
	const element = document.createElement(tagName);
	className !== "" && element.classList.add(...className.split(" "));
	element.innerHTML = html;
	for (const key in attributes) {
		attributes.hasOwnProperty(key) &&
			element.setAttribute(key, attributes[key]);
	}
	return element;
};

const createDiv = (
	className: string,
	elements: HTMLElement[] = []
): HTMLElement => {
	const div = createElement("div", className);
	elements.forEach((element) => {
		div.append(element);
	});
	return div;
};

const createSection = (
	className: string,
	elements: HTMLElement[] = []
): HTMLElement => {
	const section = createElement("section", className);
	elements.forEach((element) => {
		section.append(element);
	});
	return section;
};

const createButton = (className: string, text: string): HTMLElement => {
	const button = createElement("button", className, text);

	return button;
};

const createHeader = () => {
	const header = createElement("header", "header");
	const logoHeader = createElement("img", "header__logo", "", { src: Logo });
	const menuHeaderButton = createButton(
		"header__menu-button",
		`<ion-icon name="menu-sharp" size="large"></ion-icon>`
	);
	header.append(logoHeader, menuHeaderButton);
	return header;
};

const createMain = (): HTMLElement => {
	const main = createElement("main", "main");
	const imgPre = createElement("img", "presentation__image", "", {
		src: PresentationImage,
		alt: "presentation image",
	});
	const bg = createElement("img", "presentation__bg", "", { src: Background });
	const imgPreContainer = createDiv("presentation__image-container", [imgPre]);
	const titlePresentation = createElement(
		"h1",
		"presentation__info-title",
		"Bring everyone together to build better products."
	);
	const descriptionPresentation = createElement(
		"p",
		"presentation__info-description",
		"Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."
	);
	const buttonPresentation = createButton(
		"presentation__info-button",
		"Get Started"
	);
	const infoPreContainer = createDiv("presentation__info-container", [
		titlePresentation,
		descriptionPresentation,
		buttonPresentation,
	]);
	const presentationSection = createSection("presentation", [
		imgPreContainer,
		bg,
		infoPreContainer,
	]);
	main.append(presentationSection);
	return main;
};

export { createHeader, createMain };
