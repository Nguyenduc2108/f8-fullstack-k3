const textText = document.querySelector(".text");
const text = textText.innerText;
const words = text.split(" ");
var currentText = 0;

function changTextColor() {
  const currentWord = words[currentText];
  var newText = "";

  for (var i = 0; i < words.length; i++) {
    if (i === currentText) {
      newText += `<span>${words[i]}</span>`;
    } else {
      newText += words[i];
    }
    newText += " ";
  }
  textText.innerHTML = newText.trim();
  currentText++;

  if (currentText >= words.length) {
    currentText = 0;
  }
}
setInterval(changTextColor, 500);
