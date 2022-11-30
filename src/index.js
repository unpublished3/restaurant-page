import createNav from "./scripts/nav";
import createHome from "./scripts/home";
import createContact from "./scripts/contact";

import "./styles/style.css";

const content = document.getElementById("content");

content.append(createNav());
content.append(createContact());
// content.append(createHome());
