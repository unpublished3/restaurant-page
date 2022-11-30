import Search from "./../assets/images/search.png";
import "./../styles/nav.css";

export default function createNav() {
  const navBar = document.createElement("nav");
  const searchIcon = new Image();

  navBar.classList.add("nav-bar");
  searchIcon.src = Search;

  let divs = [];
  let texts = ["Home", "Menu", "Contact"];

  for (let i = 0; i < 4; i++) {
    divs[i] = document.createElement("div");
    divs[i].classList.add("nav-item");
    if (i !== 3) divs[i].textContent = texts[i];
    else divs[i].appendChild(searchIcon);

    navBar.appendChild(divs[i]);
  }

  return navBar;
}
