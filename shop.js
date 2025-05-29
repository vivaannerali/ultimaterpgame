const shopItems = [
  { id: 1, name: "Health Potion", cost: 10, type: "potion" },
  { id: 2, name: "Mana Potion", cost: 15, type: "potion" }
];

function openShop() {
  let shopList = "Shop:\n";
  shopItems.forEach(item => {
    shopList += `${item.name} - ${item.cost} coins\n`;
  });
  alert(shopList);
}