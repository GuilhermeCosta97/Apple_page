const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  const colorDiv = btn.querySelector(".color");
  const hexColor = btn.dataset.color;

  if (colorDiv && hexColor) {
    colorDiv.style.backgroundColor = hexColor;
  }
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("selected")) return;

    buttons.forEach((item) => item.classList.remove("selected"));

    btn.classList.add("selected");

    const id = btn.dataset.image || btn.getAttribute("id");

    image.classList.add("changing");

    setTimeout(() => {
      image.setAttribute("src", `img/iphone_${id}.jpg`);
      image.classList.remove("changing");
    }, 200);
  });
});