var fileBtn = document.querySelector(".file-btn");
var dropdownMenu = document.querySelector(".dropdown-menu");
var newBtn = document.querySelector(".dropdown-item.new");
var saveTxtBtn = document.querySelector(".dropdown-item.save-txt");
var savePdfBtn = document.querySelector(".dropdown-item.save-pdf");
var content = document.querySelector(".content");
var numberCharacter = document.querySelector(".doc-editor-character span");
var numberWord = document.querySelector(".doc-editor-word span");
var boldBtn = document.querySelector(".bold-btn");
var underlineBtn = document.querySelector(".underline-btn");
var italicBtn = document.querySelector(".italic-btn");
var colorpickImg = document.querySelector(".colorpick");
var colorBtnContainer = document.querySelector(".control-container");
var colorBtn = document.querySelector(".color_btn");

content.focus();

function updateWordAndCharacterCount() {
  var text = content.textContent;
  var words = text.split(/\s+/).filter(function (word) {
    return word.length > 0;
  });

  var characterCount = text.length;
  var wordCount = words.length;

  numberCharacter.textContent = characterCount;
  numberWord.textContent = wordCount;
}
content.addEventListener("input", updateWordAndCharacterCount);

newBtn.addEventListener("click", function () {
  content.textContent = "";
  updateWordAndCharacterCount();
});

boldBtn.addEventListener("click", function () {
  document.execCommand("bold");
});

underlineBtn.addEventListener("click", function () {
  document.execCommand("underline");
});

italicBtn.addEventListener("click", function () {
  document.execCommand("italic");
});

colorBtn.addEventListener("change", function () {
  var color = colorBtn.value;
  document.execCommand("foreColor", false, color);
});

colorpickImg.addEventListener("click", function () {
  colorBtnContainer.classList.toggle("show");
});

fileBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", function (e) {
  if (!e.target.matches(".file-btn")) {
    dropdownMenu.classList.remove("show");
  }
});

saveTxtBtn.addEventListener("click", function () {
  var textToSave = content.textContent;
  var blob = new Blob([textToSave], { type: "text/plain" });
  saveFile(blob, "document.txt");
});

savePdfBtn.addEventListener("click", function () {
  saveContentAsPDF();
});
function saveFile(blob, fileName) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function saveContentAsPDF() {
  var contentElement = document.querySelector(".content");
  var options = {
    margin: 10,
    filename: "document.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  html2pdf()
    .from(contentElement)
    .set(options)
    .outputPdf(function (pdf) {
      var blob = new Blob([pdf], { type: "application/pdf" });
      saveFile(blob, "document.pdf");
    });
}
