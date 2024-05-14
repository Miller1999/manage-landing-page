import Logo from "./assets/logo.svg";
import Background from "./assets/bg-tablet-pattern.svg";
import PresentationImage from "./assets/illustration-intro.svg";

const featuresInfo = [
	{
		number: "01",
		title: "Track company-wide progress",
		description:
			"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
	},
	{
		number: "02",
		title: "Advanced built-in reports",
		description:
			"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
	},
	{
		number: "03",
		title: "Everything you need in one place",
		description:
			"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
	},
];

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

const createArticle = (
	num: string,
	title: string,
	desc: string
): HTMLElement => {
	const article = createElement("article", "features__item");
	const numContainer = createElement("span", "article__header-num", num);
	const articleTitle = createElement("h3", "article__header-title", title);
	const articleDescription = createElement(
		"p",
		"article__main-description",
		desc
	);
	const articleHeader = createDiv("article__header-container", [
		numContainer,
		articleTitle,
	]);
	const articleMain = createDiv("article__main-container", [
		articleDescription,
	]);
	article.append(articleHeader, articleMain);
	return article;
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
	const presentationBg = createElement("img", "presentation__bg", "", {
		src: Background,
	});
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
	const presentation = createSection("presentation", [
		imgPreContainer,
		presentationBg,
		infoPreContainer,
	]);
	const featureBg = createElement("img", "features__bg", "", {
		src: Background,
	});
	const titleFeatures = createElement(
		"h2",
		"features__info-title",
		"What’s different about Manage?"
	);
	const descriptionFeatures = createElement(
		"p",
		"features__info-description",
		"Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. "
	);
	const infoFeaturesContainer = createDiv("features__info-container", [
		titleFeatures,
		descriptionFeatures,
	]);
	const featuresItems: HTMLElement[] = [];
	featuresInfo.forEach((feature) => {
		const newArticle = createArticle(
			feature.number,
			feature.title,
			feature.description
		);
		featuresItems.push(newArticle);
	});
	const featuresItemsContainer = createDiv(
		"features__items-container",
		featuresItems
	);
	const features = createSection("features", [
		featureBg,
		infoFeaturesContainer,
		featuresItemsContainer,
	]);
	main.append(presentation, features);
	return main;
};

export { createHeader, createMain };
