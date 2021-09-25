window.onload = function () {
  let emailState = false;

  //   HTML Refrences

  let emailModal = document.getElementsByClassName("email-modal")[0];
  let closeBtn = document.getElementsByClassName("email-modal__close-btn")[0];
  let declineOffer = document.getElementsByClassName(
    "email-modal__dicline-offer"
  )[0];
  let emailInput = document.getElementsByClassName("email-modal__input")[0];
  let emailBtn = document.getElementsByClassName("email-modal__button")[0];
  let emailError = document.getElementsByClassName(
    "email-modal__error-message"
  )[0];
  let emailInputError = document.getElementsByClassName(
    "email-modal__form-group"
  )[0];
  let thankYouMsg = document.getElementsByClassName("email-thank")[0];

  //  Functions

  let showModal = () => {
    if (emailState === false) {
      emailModal.classList.add("email-modal--visible");
      emailState = true;
    }
  };

  let checkForValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  let showEmailErrorMsg = () => {
    emailError.classList.add("email-modal__error-message--visible");
    emailInputError.classList.add("email-modal__form-group--error");
    emailInput.value = " ";
  };

  let removeEmailErrorMsg = () => {
    emailError.classList.remove("email-modal__error-message--visible");
    emailInputError.classList.remove("email-modal__form-group--error");
  };

  let closeModal = () => {
    emailModal.classList.remove("email-modal--visible");
  };

  let showThankYouMsg = () => {
    thankYouMsg.classList.add("email-thank--success");
  };

  let autoCloseThankYouMsg = ()=>{
      setTimeout(()=>{
          closeModal();
      },3000)
  };

  //    Event listners

  emailInput.addEventListener("click", () => {
    removeEmailErrorMsg(); 
  });

  emailBtn.addEventListener("click", () => {
    if (checkForValidEmail(emailInput.value)) {
      showThankYouMsg();
      console.log(emailInput.value)
      autoCloseThankYouMsg();
    } else {
      showEmailErrorMsg();
    }
  });

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  declineOffer.addEventListener("click", () => {
    closeModal();
  });

  document.body.addEventListener("mouseleave", () => {
    showModal();
  });
};
