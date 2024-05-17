import "./style.sass";
import { init } from "./functionality";
import {
	createFooter,
	createHeader,
	createMain,
	createMenu,
} from "./UIelements";

const app = document.querySelector("#app");

const header = createHeader();
const main = createMain();
const footer = createFooter();
const menu = createMenu();

if (window.innerWidth < 1280) {
	app?.append(header, menu, main, footer);
} else {
	app?.append(header, main, footer);
}

init();
