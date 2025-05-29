const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: 100, y: 100, size: 20, speed: 5 };
let keys = {};
let dialog = document.getElementById("dialogText");

let npcs = [
  { x: 300, y: 300, dialog: "Welcome, hero! Your journey begins now." },
  { x: 600, y: 400, dialog: "Beware of the dark forest in level 2!" }
];

function drawPlayer() {
  ctx.fillStyle = "lime";
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
  ctx.fill();
}

function drawNPCs() {
  ctx.fillStyle = "yellow";
  npcs.forEach(npc => {
    ctx.beginPath();
    ctx.arc(npc.x, npc.y, 15, 0, Math.PI * 2);
    ctx.fill();
  });
}

function update() {
  if (keys["ArrowUp"] || keys["w"]) player.y -= player.speed;
  if (keys["ArrowDown"] || keys["s"]) player.y += player.speed;
  if (keys["ArrowLeft"] || keys["a"]) player.x -= player.speed;
  if (keys["ArrowRight"] || keys["d"]) player.x += player.speed;
}

function checkInteractions() {
  npcs.forEach(npc => {
    let dx = player.x - npc.x;
    let dy = player.y - npc.y;
    if (Math.sqrt(dx * dx + dy * dy) < 50) {
      document.getElementById("dialog").classList.remove("hidden");
      dialog.textContent = npc.dialog;
    }
  });
}

function closeDialog() {
  document.getElementById("dialog").classList.add("hidden");
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawNPCs();
  update();
  requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", e => {
  keys[e.key] = true;
  if (e.key === " ") checkInteractions();
});
window.addEventListener("keyup", e => keys[e.key] = false);

gameLoop();