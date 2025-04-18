function spin() {
  const num = Math.floor(Math.random() * 10) + 1;
  const wheel = document.getElementById("wheel");
  const display = wheel.querySelector(".number");
  display.textContent = "?";

  wheel.style.transition = "transform 2s ease-out";
  const deg = 360 * 3 + Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${deg}deg)`;

  setTimeout(() => {
    display.textContent = num;
  }, 2000);
}
