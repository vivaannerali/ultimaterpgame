function playCutscene(texts, callback) {
  let index = 0;
  const dialog = document.getElementById("dialogText");
  const dialogBox = document.getElementById("dialog");
  dialogBox.classList.remove("hidden");

  function showNextLine() {
    if (index < texts.length) {
      dialog.textContent = texts[index++];
      setTimeout(showNextLine, 2000);
    } else {
      dialogBox.classList.add("hidden");
      if (callback) callback();
    }
  }

  showNextLine();
}