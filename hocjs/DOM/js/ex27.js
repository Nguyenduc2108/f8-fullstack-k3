//
HTMLElement.prototype.css = function (style = {}) {
  Object.assign(this.style, style);
};

var content = document.querySelector(".content");
console.log(content);

content.css({
  color: "red",
  fontWeight: "bold",
  textDecoration: "underline",
});

/*
Thư viện tab:
document.querySeletor("#tab-1").tab()
document.querySeletor("#home-slider").carousel({
    nav:true,
    dot:true,
    autoPlay:true,
})

*/
