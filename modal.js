(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  function checkWindowSize() {
    if (window.innerWidth >= 1023) {
      refs.openModalBtn.addEventListener("click", toggleModal);
    } else {
      refs.openModalBtn.removeEventListener("click", toggleModal);
    }
  }

  
  checkWindowSize();

 
  window.addEventListener("resize", checkWindowSize);

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

