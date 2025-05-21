document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const floatingHearts = document.querySelector(".floating-hearts");
  const roses = document.querySelectorAll(".rose");

  // Create floating hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.opacity = Math.random();
    floatingHearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  // Create hearts periodically
  setInterval(createHeart, 300);

  // Add click interaction
  container.addEventListener("click", (e) => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.position = "fixed";
    heart.style.animation = "none";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  });

  // Add hover effect to the bear
  const bear = document.querySelector(".bear");
  bear.addEventListener("mouseover", () => {
    bear.style.transform = "scale(1.1)";
  });

  bear.addEventListener("mouseout", () => {
    bear.style.transform = "scale(1)";
  });

  // Add special effects for roses
  roses.forEach((rose) => {
    rose.addEventListener("click", (e) => {
      e.stopPropagation();
      createRoseEffect(e.clientX, e.clientY);
    });
  });

  function createRoseEffect(x, y) {
    // Create multiple rose petals
    for (let i = 0; i < 5; i++) {
      const petal = document.createElement("div");
      petal.classList.add("rose-petal");
      petal.style.position = "fixed";
      petal.style.left = x + "px";
      petal.style.top = y + "px";
      petal.style.animation = `floatPetal ${Math.random() * 2 + 1}s forwards`;
      document.body.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 2000);
    }
  }
});
