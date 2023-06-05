// Функция для открытия модального окна
    function openModal(modalNumber) {
      var modal = document.getElementById("modal" + modalNumber);
      modal.style.display = "block";
      modal.classList.remove("is-hidden");
    }

    // Функция для закрытия модального окна
    function closeModal(modalNumber) {
      var modal = document.getElementById("modal" + modalNumber);
      modal.style.display = "none";
      modal.classList.remove("is-hidden");
    }