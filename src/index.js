import createNav from "./nav";

import "./styles/style.css";

const content = document.getElementById("content");

createNav();

content.append(createNav());
