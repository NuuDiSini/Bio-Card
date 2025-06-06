// Efek masuk saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  
  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  }, 100);
});

// Efek glow saat hover (nambah class di JS)
const card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {
  card.classList.add("glow");
});

card.addEventListener("mouseleave", () => {
  card.classList.remove("glow");
});
const music = document.getElementById("music");
const playBtn = document.getElementById("play-music");

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play().catch((error) => {
      console.error("Gagal memutar musik:", error);
    });
    playBtn.innerHTML = `<i class="fas fa-pause"></i> Pause Lagu`;
  } else {
    music.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i> Putar Lagu`;
  }
});
const music = document.getElementById("music");
const playBtn = document.getElementById("play-music");
const icon = playBtn.querySelector("i");

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    icon.classList.replace("fa-play", "fa-pause");
    playBtn.classList.add("active");
  } else {
    music.pause();
    icon.classList.replace("fa-pause", "fa-play");
    playBtn.classList.remove("active");
  }
});