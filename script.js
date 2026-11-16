const avatarButton = document.getElementById("avatar");
const eyes = document.querySelectorAll(".eye");
let blinkTimer;

function moveEyes(event) {
  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const distance = 6;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    eye.querySelector(".pupil").style.transform = `translate(${x}px, ${y}px)`;
  });
}

function blink() {
  avatarButton.classList.add("is-blinking");
  window.clearTimeout(blinkTimer);
  blinkTimer = window.setTimeout(() => {
    avatarButton.classList.remove("is-blinking");
  }, 220);
}

function centerEyes() {
  eyes.forEach((eye) => {
    eye.querySelector(".pupil").style.transform = "translate(0, 0)";
  });
}

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  window.addEventListener("pointermove", moveEyes);
  document.documentElement.addEventListener("pointerleave", centerEyes);
}

avatarButton.addEventListener("click", blink);
document.getElementById("year").textContent = new Date().getFullYear();

