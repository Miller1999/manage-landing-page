import "./style.sass";
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

app?.append(header, menu, main, footer);
