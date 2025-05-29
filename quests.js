const quests = [
  { id: 1, name: "Find the Lost Sword", completed: false },
  { id: 2, name: "Defeat the Cave Troll", completed: false }
];

function showQuestLog() {
  let log = "Quest Log:\n";
  quests.forEach(q => {
    log += `${q.name}: ${q.completed ? "✅" : "❌"}\n`;
  });
  alert(log);
}

function completeQuest(id) {
  const quest = quests.find(q => q.id === id);
  if (quest) quest.completed = true;
}