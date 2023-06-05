function openModal(modalNumber) {
      var modal = document.getElementById("modal" + modalNumber);
      modal.style.display = "block";
    }

    // Функция для закрытия модального окна
    function closeModal(modalNumber) {
      var modal = document.getElementById("modal" + modalNumber);
      modal.style.display = "none";
    };