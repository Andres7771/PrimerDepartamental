document.addEventListener('DOMContentLoaded', function() {
  const cube = document.getElementById('cube');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  let mouseX = 0;
  let mouseY = 0;
  cube.style.transform = `rotateX(-45deg) rotateY(-45deg)`;

  document.addEventListener('mousemove', function(event) {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    updateCubeRotation();
  });

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  }

  function updateCubeRotation() {
    const maxRotation = 45; // Máximo ángulo de rotación
    const clampedMouseX = Math.min(Math.max(mouseX, -1), 0);
    const clampedMouseY = Math.min(Math.max(mouseY, -1), 0);
    cube.style.transform = `rotateX(${clampedMouseY * maxRotation}deg) rotateY(${clampedMouseX * maxRotation}deg)`;
  }

  updateClock();
  setInterval(updateClock, 1000);
});
