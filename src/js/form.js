(function () {
    const modalOverlay = document.querySelector(".overlay_block");
    const submitModal = document.querySelector(".request_button");
    const modalCloseButtons = document.querySelectorAll(".modal__close");
    const modalMini = document.querySelector(".modal_mini");
    const form = document.querySelector(".request__form");
  
    modalCloseButtons.forEach(function (item) {
      item.addEventListener("click", function (e) {
        if (modalOverlay.classList.contains("overlay_active")) {
          modalOverlay.classList.remove("overlay_active");
          modalMini.classList.remove("modal_mini_active");
        }
      });
    });
  
    function handleSubmit(event) {
      if (!form.checkValidity()) return;
      event.preventDefault();
      fetch("https://formspree.io/f/xjvzvwpq", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            modalOverlay.classList.add("overlay_active");
            modalMini.classList.add("modal_mini_active");
            form.reset();
          } else {
            modalOverlay.classList.add("overlay_active");
            modalMini.classList.add("modal_mini_active");
            document.querySelector(".modal_error_oops").innerHTML = "Oops!";
            document.querySelector(".modal_error").innerHTML =
              "There was a problem submitting your form";
            form.reset();
          }
        })
        .catch((error) => {
          modalOverlay.classList.add("overlay_active");
          modalMini.classList.add("modal_mini_active");
          document.querySelector(".modal_error_oops").innerHTML = "Oops!";
          document.querySelector(".modal_error").innerHTML =
            "There was a problem submitting your form";
          form.reset();
        });
    }
    submitModal.addEventListener("click", handleSubmit);
})();  