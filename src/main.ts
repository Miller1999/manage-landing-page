import "./style.sass";
import { createHeader } from "./UIelements";

const app = document.querySelector("#app");

const header = createHeader();

app?.append(header);
