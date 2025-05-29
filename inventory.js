let inventory = {
  coins: 0,
  items: [],
};

function addItem(item) {
  inventory.items.push(item);
  alert(`You picked up a ${item.name}`);
}

function showInventory() {
  let message = "Inventory:\n";
  inventory.items.forEach(item => {
    message += `- ${item.name} (${item.type})\n`;
  });
  alert(message);
}