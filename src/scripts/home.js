import "./../styles/home.css";
import Background from "./../assets/images/background.jpg";

export default function createHome() {
  const home = document.createElement("main");
  const right = document.createElement("div");
  const left = document.createElement("div");

  let texts = {
    quote: "Oasis in the middle of a desert",
    name: "The Noble Canteen",
    buttonTexts: ["View Menu", "Contact Us"],
  };

  for (let key in texts) {
    let divs = document.createElement("div");
    if (key !== "buttonTexts") {
      divs.textContent = texts[key];
      divs.classList.add(key);
    } else {
      divs.classList.add("btn");
      for (let j = 0; j < 2; j++) {
        let btn = document.createElement("button");
        btn.textContent = texts[key][j];
        btn.classList.add("btn-item");
        divs.appendChild(btn);
      }
    }

    right.appendChild(divs);
  }

  const backgroundImage = new Image();
  backgroundImage.src = Background;
  backgroundImage.classList.add("img");
  left.appendChild(backgroundImage);

  right.classList.add("right");

  home.appendChild(right);
  home.appendChild(left);
  return home;
}
