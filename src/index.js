import createNav, { divs as navButtons } from "./scripts/nav";
import createHome from "./scripts/home";
import createContact from "./scripts/contact";
import createMenu from "./scripts/menu";

import "./styles/style.css";

const content = document.getElementById("content");

content.append(createNav());
content.append(createHome());

navButtons[0].addEventListener("click", () => {
  content.removeChild(content.children[1]);
  content.append(createHome());
});

navButtons[1].addEventListener("click", () => {
  content.removeChild(content.children[1]);
  content.append(createMenu());
});

navButtons[2].addEventListener("click", () => {
  content.removeChild(content.children[1]);
  content.append(createContact());
});
