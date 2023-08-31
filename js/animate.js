const cube = document.getElementById("animatedCube");
const optionsContainer = document.getElementById("options");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
let animationPaused = false;

/*  Función que detiene y reactiva el movimiento del cubo */
cube.addEventListener("click", () => {
  console.log("Di clic en el cubo");
  if (!animationPaused) {
    console.log("Animación pausada");
    cube.style.animationPlayState = "paused";
    optionsContainer.style.display = "flex";
    animationPaused = true;
    setTimeout(() => {
      cube.style.animationPlayState = "running";
      optionsContainer.style.display = "none";
      animationPaused = false;
    }, 5000);
  }
});

/* Función para páginas */
option1.addEventListener("click", () => {
  console.log("Di clic en la opción 1");
  window.location.href = "../pages/services.html";
});
option2.addEventListener("click", () => {
  console.log("Di clic en la opción 2");
  window.location.href = "../pages/newsletter.html";
});
option3.addEventListener("click", () => {
  console.log("Di clic en la opción 3");
  window.location.href = "../pages/contact.html";
});
