const removeTransition = function (e) {
  if (e.propertyName !== "box-shadow") return;
  this.classList.remove("playing");
};

// function to play sound on keypress
const playSound = function (e) {
  let audio, key, keyCode;
  if (e.type == "click") {
    if (e.target.parentNode.classList.contains("keys")) {
      key = e.target;
      keyCode = e.target.dataset.key;
    } else if (e.target.parentNode.classList.contains("key")) {
      key = e.target.parentNode;
      keyCode = e.target.parentNode.dataset.key;
    } else {
      return;
    }
  } else if (event.type == "keydown") {
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    keyCode = e.keyCode;
  }
  audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};
window.addEventListener("keydown", playSound);
window.addEventListener("click", playSound);

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
