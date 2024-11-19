document.addEventListener("DOMContentLoaded", () => {
    const text = "Oi, André! ❤️";
    const animatedText = document.getElementById("animatedText");
    let index = 0;
  
    // Animação de texto
    const typeWriter = () => {
      if (index < text.length) {
        animatedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  
    // Botão de surpresa
    const button = document.getElementById("magicButton");
    const surprise = document.querySelector(".surprise");
    button.addEventListener("click", () => {
      surprise.classList.toggle("hidden");
    });
  
    // Controle de música
    const playMusicButton = document.getElementById("playMusicButton");
    const backgroundMusic = document.getElementById("backgroundMusic");
  
    playMusicButton.addEventListener("click", () => {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        playMusicButton.textContent = "Música tocando...";
      } else {
        backgroundMusic.pause();
        playMusicButton.textContent = "Tocar música";
      }
    });
  });
  