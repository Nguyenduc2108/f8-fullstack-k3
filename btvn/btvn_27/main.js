const productTable = document.querySelector(".product-table");
const productCart = document.querySelector(".product-cart");

const products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 2000,
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 3000,
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    price: 4000,
  },
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function deleteProduct(productId) {
  const existingProductIndex = cart.findIndex(
    (product) => product.id === productId
  );
  if (existingProductIndex !== -1) {
    cart.splice(existingProductIndex, 1);
    saveCartToLocalStorage();
    renderCart();
  }
}

function updateProductCart() {
  cart.forEach((product) => {
    const productId = product.id;
    const quantityInput = productCart.querySelector(
      `.quantity[data-id="${productId}"]`
    );
    if (quantityInput) {
      const newQuantity = parseInt(quantityInput.value);
      if (newQuantity >= 1) {
        product.quantity = newQuantity;
        product.total = product.price * newQuantity;
      } else {
        deleteProduct(productId);
      }
    }
  });
  saveCartToLocalStorage();
  renderCart();
}

function renderProduct() {
  const tableProductBody = document.createElement("tbody");
  productTable.append(tableProductBody);
  tableProductBody.innerHTML = products
    .map((product) => {
      return `
        <tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>
            <input type="number" class="quantity" value="1" min="0" />
            <button type="button" class="add-to-cart" data-id="${product.id}" >Thêm vào giỏ</button>
          </td>
        </tr>
      `;
    })
    .join("");

  const btnAdds = document.querySelectorAll(".add-to-cart");
  const quantity = document.querySelectorAll(".quantity");

  btnAdds.forEach((btnAdd) => {
    btnAdd.addEventListener("click", function () {
      const productId = parseInt(btnAdd.getAttribute("data-id"));
      const quantityValue = parseInt(
        btnAdd.parentElement.querySelector(".quantity").value
      );
      const productToAdd = products.find((product) => product.id === productId);
      if (productToAdd) {
        const existingProductIndex = cart.findIndex(
          (item) => item.id === productId
        );
        if (existingProductIndex !== -1) {
          cart[existingProductIndex].quantity += quantityValue;
          cart[existingProductIndex].total =
            cart[existingProductIndex].quantity *
            cart[existingProductIndex].price;
        } else {
          productToAdd.quantity = quantityValue;
          productToAdd.total = productToAdd.price * quantityValue;
          cart.push(productToAdd);
        }
        saveCartToLocalStorage();
        renderCart();
      }
    });
  });
}

function updateCartSummary() {
  let totalPrice = 0;
  let totalQuantity = 0;

  for (const product of cart) {
    totalPrice += product.total;
    totalQuantity += product.quantity;
  }

  const totalPriceElement = document.querySelector("#total-price");
  const totalQuantityElement = document.querySelector("#total-quantity");

  totalPriceElement.textContent = totalPrice;
  totalQuantityElement.textContent = totalQuantity;
}

function clearCart() {
  cart.length = 0;
  saveCartToLocalStorage();
  renderCart();
}

function renderCart() {
  const cartTable = `
  <table cellpadding="5" cellspacing="0" width="100%" border="1" id="cart-table">
  <thead>
    <tr>
        <th width="10%">STT</th>
        <th width="70%">Tên sản phẩm</th>
        <th width="10%">Giá</th>
        <th width="10%">Số lượng</th>
        <th width="10%">Thành tiền</th>
        <th width="5%">Xoá</th>
    </tr>
</thead>
</table>
<button type="button" id="update-cart">Cập nhật giỏ hàng</button>
<button type="button" id="delete-cart">Xoá giỏ hàng</button>`;
  productCart.innerHTML = cartTable;
  const tableCartBody = document.createElement("tbody");

  tableCartBody.innerHTML = cart
    .map((product, index) => {
      return `<tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><input type="number" class="quantity" data-id="${
              product.id
            }" value="${product.quantity}" min="0"></td>
            <td>${product.total}</td>
            <td><button type="button" class="btn-delete" data-id="${
              product.id
            }">Xoá</button></td>
        </tr>`;
    })
    .join("");
  productCart.querySelector("#cart-table").appendChild(tableCartBody);

  const tableCartFoot = document.createElement("tfoot");
  productCart.querySelector("#cart-table").appendChild(tableCartFoot);
  tableCartFoot.innerHTML = `
  <tr>
   <td colspan="3">Tổng</td>
    <td id="total-quantity" colspan="1"></td>
    <td id="total-price" colspan="2"></td>
  </tr>
   
  `;
  const btnUpdateCart = productCart.querySelector("#update-cart");

  btnUpdateCart.addEventListener("click", function () {
    alert("Cập nhật giỏ hàng thành công");
    updateProductCart();
  });

  const btnAllDelete = productCart.querySelector("#delete-cart");

  btnAllDelete.addEventListener("click", function () {
    if (confirm("Are you sure?") === true) {
      alert("Xóa sản phẩm thành công");
      clearCart();
    }
  });

  const btnDeletes = document.querySelectorAll(".btn-delete");

  btnDeletes.forEach((btnDelete) => {
    btnDelete.addEventListener("click", function () {
      const productId = parseInt(btnDelete.getAttribute("data-id"));
      if (confirm("Are you sure?") === true) {
        alert("Xóa sản phẩm thành công");
        deleteProduct(productId);
      }
    });
  });

  updateCartSummary();

  if (cart.length === 0) {
    productCart.textContent = "Giỏ hàng không có sản phẩm";
  }
}

renderProduct();
renderCart();
updateCartSummary();
