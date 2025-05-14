
  let likeCount = 0, dislikeCount = 0;

  function increaseLikes() {
      likeCount++;
      document.getElementById("like-text").textContent = `Вы нажали “Мне нравится сайт” ${likeCount} раз.`;
  }

  function increaseDislikes() {
      dislikeCount++;
      document.getElementById("dislike-text").textContent = `Вы нажали “Мне не нравится сайт” ${dislikeCount} раз.`;
  }

  function toggleMenu() {
      const menu = document.getElementById("navLinks");
      menu.classList.toggle("show");
  }

