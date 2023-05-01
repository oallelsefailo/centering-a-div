const button = document.querySelector(".clickMe");

document.addEventListener("mousemove", function (event) {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const buttonRect = button.getBoundingClientRect();
  const buttonX = buttonRect.x + buttonRect.width / 2;
  const buttonY = buttonRect.y + buttonRect.height / 2;
  const distance = Math.sqrt(
    Math.pow(cursorX - buttonX, 2) + Math.pow(cursorY - buttonY, 2)
  );

  if (distance < 100) {
    const angle = Math.atan2(buttonY - cursorY, buttonX - cursorX);
    const newX = buttonX + Math.cos(angle) * 390;
    const newY = buttonY + Math.sin(angle) * 390;
    button.style.transition = "transform 0.2s ease-in-out";
    button.style.transform = `translate(${newX - buttonX}px, ${
      newY - buttonY
    }px)`;
  } else {
    button.style.transition = "transform 0.2s ease-in-out";
    button.style.transform = "";
  }
});
