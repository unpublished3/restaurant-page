import createNav from "./scripts/nav";
import createHome from "./scripts/home";

import "./styles/style.css";

const content = document.getElementById("content");

content.append(createNav());
content.append(createHome());
