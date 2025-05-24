document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const floatingHearts = document.querySelector(".floating-hearts");
  const roses = document.querySelectorAll(".rose");

  // Create floating stars
  function createStar() {
    const star = document.createElement("div");
    star.classList.add("heart"); // We'll keep the heart class for animation
    star.innerHTML = "⭐";
    star.style.fontSize = "24px";
    star.style.color = "#4a90e2";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    star.style.opacity = Math.random();
    floatingHearts.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  // Create stars periodically
  setInterval(createStar, 300);

  // Add click interaction
  container.addEventListener("click", (e) => {
    const star = document.createElement("div");
    star.classList.add("heart");
    star.innerHTML = "⭐";
    star.style.fontSize = "24px";
    star.style.color = "#4a90e2";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.position = "fixed";
    star.style.animation = "none";
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
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
      createStarEffect(e.clientX, e.clientY);
    });
  });

  function createStarEffect(x, y) {
    // Create multiple stars
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("div");
      star.innerHTML = "⭐";
      star.style.position = "fixed";
      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.fontSize = "20px";
      star.style.color = "#4a90e2";
      star.style.animation = `floatPetal ${Math.random() * 2 + 1}s forwards`;
      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 2000);
    }
  }
});
