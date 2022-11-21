const cartIcon = document.querySelector(".cart__slider");
const productRow = document.querySelector(".cart__view");
const bg = document.querySelector(".blurred");
const nameInput = document.querySelector(".fullname__label");
nameInput.nextElementSibling.parentElement.nextElementSibling.innerHTML = `<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.59229 22.7471L22.2091 6.13022L18.079 2.0001L1.46216 18.6169L1.06494 23.1443L5.59229 22.7471Z"
      stroke="#363636"
      stroke-width="1.5"
      stroke-miterlimit="10"
    />
  </svg>`;
nameInput.nextElementSibling.addEventListener("change", () => {
  nameInput.nextElementSibling.value.length
    ? (nameInput.nextElementSibling.parentElement.nextElementSibling.innerHTML = `<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.59229 22.7471L22.2091 6.13022L18.079 2.0001L1.46216 18.6169L1.06494 23.1443L5.59229 22.7471Z"
      stroke="#363636"
      stroke-width="1.5"
      stroke-miterlimit="10"
    />
  </svg>`)
    : (nameInput.nextElementSibling.parentElement.nextElementSibling.innerHTML = `<h4>!<h4/> `);
});

let obj = [
  {
    id: 1,
    name: "BROWN leather shoes -  ",
    details: "45 / Brown / Calfskin",
    image: "https://m.media-amazon.com/images/I/817NXl9u6RL._AC_SL1500_.jpg",
    price: 150,
  },
  {
    id: 2,
    name: "BROWN leather bag -  ",
    details: "20 x 40 sm / Brown / Calfskin",
    image: "https://static-01.daraz.lk/p/e2c25df7e59f65901af2d7b0fa882473.jpg",
    price: 350,
  },
];
localStorage.setItem("products", JSON.stringify(obj));
let products = [];
if (JSON.parse(localStorage.getItem("products"))) {
  products = JSON.parse(localStorage.getItem("products"));
} else {
  console.log("qq");
}

cartIcon.addEventListener("click", () => {
  productRow.classList.toggle("cart__active");
  document.querySelector(".background").classList.toggle("backgroundBlur");
});

if (products.length > 0) {
  products.map((product) => {
    productRow.innerHTML += `  <div class="cart__view__content row">
    <div class="cart__view__content__box">
      <div class="cart__view__content__box__title">
        <p>${product.name} ${product.price}  </p>
        <span>${product.details}</span>
      </div>
      <div class="cart__view__content__box__image">
        <img
          src="${product.image}"
          alt=""
        />
        <span class="cart__remove">x</span>
        <span class="d-none">${product.id}</span>


      </div>
    </div>
    
  </div>`;
  });
  let pr = 0;
  products.map((p) => {
    pr += p.price;
  });
  productRow.innerHTML += `<div class="btnn">
  <p>your total: ${pr}azn</p>
  <button>checkout</button>
</div>;`;
} else {
  productRow.innerHTML = ` <span >cart is empty</span>`;
}
const deleteBtns = document.querySelectorAll(".cart__remove");
deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", function (e) {
    let prodId = +e.target.nextElementSibling.innerText;
    let prods = JSON.parse(localStorage.getItem("products"));
    const newProds = prods.filter((p) => p.id !== prodId);

    localStorage.setItem("products", JSON.stringify(newProds));
    e.target.parentElement.parentElement.parentElement.remove();

    console.log(prodId);
  });
});
