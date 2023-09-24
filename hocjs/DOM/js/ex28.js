// để tạo được 1 component( thành phần web)
/*
-Có 1 hàm tạo hoặc class kế thừa từ HTMLElement
- sử dụng object: customElement
*/

// tạo ra 1 thẻ html có tên: hello-world

// function HelloWorld() {
//   return Reflect.construct(HTMLElement, [], HelloWorld);
// }

// HelloWorld.prototype = Object.create(HTMLElement.prototype);

// // VÒng đời component
// HelloWorld.prototype.constructor = HelloWorld;

// HelloWorld.prototype.connectedCallback = function () {
//   console.log("Nội dung của component");
//   this.innerText = "xin chào F8";
//   var name = this.getAttribute("name");
//   console.log(name);
// };

// HelloWorld.prototype.disconnectedCallback = function () {
//   console.log("Element đã bị xóa khỏi DOM");
// };

// customElements.define("hello-world", HelloWorld);
component.create("hello-world", function () {
  this.innerText = "Xin chào F8";
});

component.create("image-component", function () {
  var link = this.getAttribute("link");
  var width = this.getAttribute("width");
  var height = this.getAttribute("height");
  var border = this.getAttribute("border");
  var radius = this.getAttribute("radius");
  var borderColor = this.getAttribute("border-color");

  var style = document.createElement("style");
  style.textContent = `
  .box-image {
    display:inline-block;
    border: ${border} solid ${borderColor}
  }
  `;

  this.innerHTML = `<div class ="box-image">
    <img src="${link}" width="${width}" height="${height}"  /></div>`;
});
