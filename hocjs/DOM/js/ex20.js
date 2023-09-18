//Event: beforeunload

var handleBeforeUnload = function (e) {
  e.preventDefault();
  e.returnValue = "F8";
};

var loginForm = document.querySelector(".login-form");
loginForm.addEventListener("input", function (e) {
  console.log(e);
  console.log(e.target.defaultValue, e.target.value);
  if (e.target.defaultValue !== e.target.value) {
    // add event beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);
  } else {
    // remove event beforeunload
    window.removeEventListener("beforeunload", handleBeforeUnload);
  }
});

// khi submit: => chan ko cho chuyen trang => Xoa event beforeunload => re-submit (thong qua ham submit())

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  window.removeEventListener("beforeunload", handleBeforeUnload);
  this.submit();
});
