import Search from "./../assets/images/search.png";
import "./../styles/nav.css";

export default function createNav() {
  const navBar = document.createElement("nav");
  const searchIcon = new Image();

  navBar.classList.add("nav-bar");
  searchIcon.src = Search;

  let texts = ["Home", "Menu", "Contact"];

  for (let i = 0; i < 4; i++) {
    let divs = document.createElement("div");
    divs.classList.add("nav-item");
    if (i !== 3) divs.textContent = texts[i];
    else divs.appendChild(searchIcon);

    navBar.appendChild(divs);
  }

  return navBar;
}
