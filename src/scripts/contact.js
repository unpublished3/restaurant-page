import "./../styles/contact.css";

export default function createContact() {
  const contact = document.createElement("main");
  const contactForm = document.createElement("form");

  // const title = document.createElement("h1");
  // title.textContent = "Book a Table";
  // contactForm.appendChild(title);

  contactForm.appendChild(createFormElement("name", "text"));
  contactForm.appendChild(createFormElement("email", "email"));
  contactForm.appendChild(createFormElement("phone", "phone"));
  contactForm.appendChild(createFormElement("date", "date"));
  contactForm.appendChild(createFormElement("time", "time"));

  let btn = document.createElement("button");
  btn.textContent = "Submit";
  btn.classList.add("submit");
  btn.type = "button";
  contactForm.appendChild(btn);

  contact.appendChild(contactForm);
  contact.classList.add("contact");
  return contact;
}

function createFormElement(htmlId, type) {
  let ipt = document.createElement("input");
  ipt.id = htmlId;
  ipt.type = type;
  if (type === "time") ipt.step = 60;

  let lbl = document.createElement("label");
  lbl.htmlFor = htmlId;
  lbl.textContent = htmlId.charAt(0).toUpperCase() + htmlId.slice(1);

  let divs = document.createElement("div");

  divs.appendChild(lbl);
  divs.appendChild(ipt);
  divs.classList.add("form-element");

  return divs;
}
