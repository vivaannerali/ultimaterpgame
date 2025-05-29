let tutorialStep = 0;
const tutorialMessages = [
  "Welcome to the Ultimate RPG!",
  "Use WASD or Arrow Keys to move.",
  "Walk near the golden NPC to talk to them. Press E or Enter to interact.",
  "Open your Inventory with I. Access quests with Q.",
  "Explore the world, find quests, and become a hero!",
  "Good luck, adventurer!"
];

function showTutorial() {
  if (tutorialStep < tutorialMessages.length) {
    const tutorialBox = document.getElementById("tutorialBox");
    tutorialBox.innerText = tutorialMessages[tutorialStep];
    tutorialBox.style.display = "block";
  } else {
    document.getElementById("tutorialBox").style.display = "none";
  }
}

function nextTutorialStep() {
  tutorialStep++;
  showTutorial();
}

window.addEventListener("keydown", function(e) {
  if (tutorialStep < tutorialMessages.length && (e.key === " " || e.key === "Enter")) {
    nextTutorialStep();
  }
});