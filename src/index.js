import createNav from "./scripts/nav";
import createHome from "./scripts/home";
import createContact from "./scripts/contact";
import createMenu from "./scripts/menu";

import "./styles/style.css";

const content = document.getElementById("content");

content.append(createNav());
// content.append(createHome());
content.append(createMenu());
// content.append(createContact());
