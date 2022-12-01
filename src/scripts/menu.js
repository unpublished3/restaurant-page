import "./../styles/menu.css";

const foodAndImg = {
  "Meat Skewer":
    "https://www.zeldadungeon.net/wiki/images/b/b3/Spiced-meat-skewer.png",
  "Fish Skewer":
    "https://www.zeldadungeon.net/wiki/images/6/62/Fish-skewer.png",
  "Mushroom Skewer":
    "https://www.zeldadungeon.net/wiki/images/5/58/Mushroom-skewer.png",
  "Seafood Skewer":
    "https://www.zeldadungeon.net/wiki/images/5/58/Mushroom-skewer.png",
  "Fried Wild Greens":
    "https://www.zeldadungeon.net/wiki/images/2/24/Fried-wild-greens.png",
  "Simmered Fruit":
    "https://www.zeldadungeon.net/wiki/images/9/91/Simmered-fruit.png",
  "Sea Food Rice Balls":
    "https://www.zeldadungeon.net/wiki/images/f/f2/Seafood-rice-balls.png",
  "Meaty Rice Balls":
    "https://www.zeldadungeon.net/wiki/images/a/a6/Meaty-rice-balls.png",
  "Meat Curry": "https://www.zeldadungeon.net/wiki/images/8/87/Meat-curry.png",
  "Seafood Curry":
    "https://www.zeldadungeon.net/wiki/images/f/f4/Seafood-curry.png",
  "Vegetable Curry":
    "https://www.zeldadungeon.net/wiki/images/c/cf/Vegetable-curry.png",
  "Mushroom Risotto":
    "https://www.zeldadungeon.net/wiki/images/0/0d/Mushroom-risotto.png",
  "Vegetable Risotto":
    "https://www.zeldadungeon.net/wiki/images/3/38/Vegetable-risotto.png",
  "Meat and Rice Bowl":
    "https://www.zeldadungeon.net/wiki/images/2/2a/Meat-and-rice-bowl.png",
  "Egg Fried Rice":
    "https://www.zeldadungeon.net/wiki/images/6/6a/Fried-egg-and-rice.png",
  "Seafood Fried Rcie":
    "https://www.zeldadungeon.net/wiki/images/8/8d/Seafood-fried-rice.png",
  "Seafood Paella":
    "https://www.zeldadungeon.net/wiki/images/7/77/Seafood-paella.png",
  "Veggie Cream Soup":
    "https://www.zeldadungeon.net/wiki/images/e/e1/Veggie-cream-soup.png",
  "Meat Stew": "https://www.zeldadungeon.net/wiki/images/2/23/Meat-stew.png",
  "Crad Stri Fry":
    "https://www.zeldadungeon.net/wiki/images/0/04/Crab-stir-fry.png",
  "Spicy Pepper Steak":
    "https://www.zeldadungeon.net/wiki/images/5/58/Spicy-pepper-steak.png",
  "Salt Grilled Crab":
    "https://www.zeldadungeon.net/wiki/images/3/3d/Salt-grilled-crab.png",
  "Salt Grilled Fish":
    "https://www.zeldadungeon.net/wiki/images/4/40/Salt-grilled-fish.png",
  "Meat Pie": "https://www.zeldadungeon.net/wiki/images/d/db/Meat-pie.png",
  "Meat Stuffed Pumpkin":
    "https://www.zeldadungeon.net/wiki/images/d/db/Meat-pie.png",
  Fruitcake: "https://www.zeldadungeon.net/wiki/images/9/91/Fruitcake.png",
  "Fried Bananas":
    "https://www.zeldadungeon.net/wiki/images/2/2b/Fried-bananas.png",
  "Hot Buttered Apple":
    "https://www.zeldadungeon.net/wiki/images/5/5e/Hot-buttered-apple.png",
  "Honey Candy":
    "https://www.zeldadungeon.net/wiki/images/f/f2/Honey-candy.png",
  "Pumpkin Pie":
    "https://www.zeldadungeon.net/wiki/images/0/0b/Pumpkin-pie.png",
  "Monster Curry":
    "https://www.zeldadungeon.net/wiki/images/e/ea/Monster-curry.png",
  "Monster Stew":
    "https://www.zeldadungeon.net/wiki/images/b/bb/Monster-stew.png",
  "Monster Cake":
    "https://www.zeldadungeon.net/wiki/images/6/60/Monster-cake.png",
};

export default function createMenu() {
  const menuContainer = document.createElement("main");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  const items = document.createElement("div");
  items.classList.add("items");

  // items.appendChild(
  //   createItem(
  //     "Mushroom Rice Balls",
  //     "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/23/BotW_Mushroom_Rice_Balls_Icon.png/revision/latest?cb=20171227173527&format=original"
  //   )
  // );
  for (let key in foodAndImg) {
    items.appendChild(createItem(key, foodAndImg[key]));
  }

  menuContainer.appendChild(title);
  menuContainer.appendChild(items);
  menuContainer.classList.add("menu");
  return menuContainer;
}

function createItem(itemName, itemImage) {
  const divs = document.createElement("div");
  const img = document.createElement("img");
  img.src = itemImage;
  img.alt = itemName;

  const imgText = document.createElement("span");
  imgText.textContent = itemName;
  divs.appendChild(img);
  divs.appendChild(imgText);

  divs.classList.add("item");
  return divs;
}
