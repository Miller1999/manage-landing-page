import Logo from "./assets/logo.svg";

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

const createDiv = (className: string, elements: [] = []): HTMLElement => {
	const div = createElement("div", className);
	elements.forEach((element) => {
		div.append(element);
	});
	return div;
};

const createSection = (className: string, elements: [] = []): HTMLElement => {
	const section = createElement("section", className);
	elements.forEach((element) => {
		section.append(element);
	});
	return section;
};

const createButton = (text: string): HTMLElement => {
	const button = createElement("button", "", text);
	return button;
};

const createHeader = () => {
	const header = createElement("header");
	const logoHeader = createElement("img", "", "", { src: Logo });
	const menuHeaderButton = createButton(
		`<ion-icon name="menu-sharp" size="large"></ion-icon>`
	);
	header.append(logoHeader, menuHeaderButton);
	return header;
};

export { createHeader };
