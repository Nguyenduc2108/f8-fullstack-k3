const loginButton = document.querySelector(".login");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

loginButton.addEventListener("click", () => {
  modal.classList.add("show");
  overlay.classList.add("show");
});

const closeModal = () => {
  modal.classList.remove("show");
  overlay.classList.remove("show");
};

overlay.addEventListener("click", closeModal);

// Chuyển đổi đăng nhập vs đăng ký
const loginTab = document.querySelector(".modal-login");
const registerTab = document.querySelector(".modal-register");
const loginForm = document.querySelector(".login-content");
const registerForm = document.querySelector(".register-content");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("no-active");
  registerTab.classList.remove("no-active");
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  resetForm(loginForm);
});

registerTab.addEventListener("click", () => {
  registerTab.classList.add("no-active");
  loginTab.classList.remove("no-active");
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  resetForm(registerForm);
});

function resetForm(form) {
  const inputs = form.querySelectorAll(".email-input");

  inputs.forEach((input) => {
    input.value = "";
    const inputError = input.nextElementSibling;
    inputError.style.display = "none";
  });
}

// Xử lý hiển thị thông báo khi input rỗng
const allInputs = document.querySelectorAll(".email-input");

allInputs.forEach((input) => {
  const inputError = input.nextElementSibling;

  input.addEventListener("blur", () => {
    if (!input.value.trim()) {
      inputError.style.display = "block";
    }
  });

  input.addEventListener("focus", () => {
    inputError.style.display = "none";
  });
});
