// Переключение текста о форуме
let expanded = false;
function toggleInfo() {
  const info = document.getElementById("info-text");
  info.textContent = expanded
    ? "Форум — место для общения покупателей."
    : "Форум — место общения, отзывов, обсуждения товаров и получения скидок!";
  expanded = !expanded;
}

// Защита от XSS — функция экранирования
function sanitizeInput(str) {
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
}

// Обработка формы
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const passwordInput = document.getElementById("password");
  const hint = document.getElementById("password-hint");

  // Подсказка по паролю
  passwordInput.addEventListener("input", function () {
    const value = this.value;
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!strongPassword.test(value)) {
      hint.textContent =
        "Пароль должен содержать минимум 8 символов, заглавную и строчную букву, цифру и специальный символ.";
    } else {
      hint.textContent = "";
    }
  });

  // Отправка формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    let comment = document.getElementById("comment").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    let errors = "";

    // Валидация
    if (username === "") errors += "Введите имя пользователя.\n";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors += "Введите корректный email.\n";
    if (!gender) errors += "Выберите пол.\n";
    if (comment.length < 10) errors += "Сообщение должно содержать не менее 10 символов.\n";

    if (errors) {
      alert("Ошибка:\n" + errors);
      return;
    }

    // Очищаем комментарий
    comment = sanitizeInput(comment);

    alert("Форма успешно отправлена!");

    // Безопасное отображение комментария на странице
    const commentsSection = document.getElementById("comments-section");
    if (commentsSection) {
      const commentBlock = document.createElement("div");
      commentBlock.style.marginTop = "10px";
      commentBlock.style.padding = "10px";
      commentBlock.style.border = "1px solid #ccc";
      commentBlock.style.borderRadius = "5px";
      commentBlock.style.backgroundColor = "#f1f1f1";

      const author = document.createElement("strong");
      author.textContent = username + " пишет:";

      const commentText = document.createElement("p");
      commentText.textContent = comment;

      commentBlock.appendChild(author);
      commentBlock.appendChild(commentText);
      commentsSection.appendChild(commentBlock);
    }

    // Сброс формы
    form.reset();
    hint.textContent = "";
  });
});
