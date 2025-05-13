let expanded = false;

function toggleInfo() {
  const text = document.getElementById("info-text");
  <!-- const photo = document.getElementById("profile-photo"); -->

  if (!expanded) {
    // Изменяем текст
    text.textContent = "Сайт разработан студентом группы АПО-23: Скрыльников Александром Александровичем. Увлекаюсь веб-разработкой, изучаю HTML, CSS, JavaScript и C++. Этот сайт — часть учебного проекта, целью которого является создание удобной платформы для взаимодействия между покупателями.";
    
    // Показываем фото
    photo.style.display = "block";
  } else {
    // Возвращаем исходный текст
    text.textContent = "Если хотите узнать обо мне больше, нажмите кнопку подробнее.";
    
    // Скрываем фото
    photo.style.display = "none";
  }

  expanded = !expanded;
}


// Валидация формы при отправке
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();
    const genderSelected = document.querySelector('input[name="gender"]:checked');

    let errorMessage = "";

    if (username === "") {
      errorMessage += "Введите имя пользователя.\n";
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      errorMessage += "Введите корректный email.\n";
    }

    if (!genderSelected) {
      errorMessage += "Выберите пол.\n";
    }

    if (comment.length < 10) {
      errorMessage += "Сообщение должно содержать не менее 10 символов.\n";
    }

    if (errorMessage) {
      alert("Ошибка:\n" + errorMessage);
    } else {
      alert("Форма успешно отправлена!");
      // Можно раскомментировать, если нужно реально отправить
      // this.submit();
    }
  });
}); 