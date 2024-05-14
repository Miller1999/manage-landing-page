import "./style.sass";
import { createHeader, createMain } from "./UIelements";

const app = document.querySelector("#app");

const header = createHeader();
const main = createMain();

app?.append(header, main);
