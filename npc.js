const npcs = [
  { id: 1, name: "Old Man", x: 300, y: 200, dialog: [
    "Greetings, traveler.",
    "Dark times have fallen upon our land...",
    "Seek the sword hidden in the Whispering Woods."
  ]}
];

function drawNPCs(ctx) {
  npcs.forEach(npc => {
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(npc.x, npc.y, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = "12px Arial";
    ctx.fillText(npc.name, npc.x - 20, npc.y - 20);
  });
}

function checkInteraction(playerX, playerY) {
  const npc = npcs.find(n => {
    const dx = n.x - playerX;
    const dy = n.y - playerY;
    return Math.sqrt(dx*dx + dy*dy) < 40;
  });

  if (npc) {
    playCutscene(npc.dialog);
  } else {
    alert("There's no one nearby to talk to.");
  }
}

window.addEventListener("keydown", function(e) {
  if (e.key === "e" || e.key === "Enter") {
    checkInteraction(player.x, player.y);
  }
});

window.addEventListener("keydown", function(e) {
  const key = e.key.toLowerCase();

  if (tutorialStep < tutorialMessages.length && (key === " " || key === "enter")) {
    e.preventDefault();
    nextTutorialStep();
    return;
  }

  switch (key) {
    case "e":
    case "enter":
      checkInteraction(player.x, player.y);
      break;
    case "i":
      alert("Inventory system coming soon!");
      break;
    case "q":
      alert("Quest log coming soon!");
      break;
    case " ":
      alert("Special ability will be added!");
      break;
    default:
      // movement keys handled separately
      break;
  }
});