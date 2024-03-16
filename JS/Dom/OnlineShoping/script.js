var loginuseremail = "";
var loginuserid = 0;
let productcardstatus = false;
// creating navvar.
function createNavvar() {
  var nav = document.createElement("div");
  nav.className = "nav";
  //    logo
  let div1 = document.createElement("div");
  div1.className = "logodiv";
  nav.appendChild(div1);
  document.body.appendChild(nav);

  let img = document.createElement("img");
  img.src = "./img/logo.png";
  img.className = "imglogo";
  div1.appendChild(img);

  let div2 = document.createElement("div");
  div2.className = "searchdiv";
  nav.appendChild(div2);

  let form = document.createElement("form");
  let searchinput = document.createElement("input");
  searchinput.className = "searchinput";
  searchinput.placeholder = "search";
  form.appendChild(searchinput);
  div2.appendChild(form);

  let div3 = document.createElement("div");
  div3.className = "optiondiv";
  nav.appendChild(div3);

  let button1 = document.createElement("button");
  button1.className = "signupbtn";
  button1.id = "signupbtn";
  button1.innerText = "sign-up";
  div3.appendChild(button1);

  let button2 = document.createElement("button");
  button2.className = "signinbtn";
  button2.id = "signinbtn";
  button2.innerText = "sign-in";
  div3.appendChild(button2);

  let cartButton = document.createElement("button");
  cartButton.className = "cartButton";
  cartButton.style.display = "none";
  cartButton.id = "cartButton";
  cartButton.innerText = "Cart";
  div3.appendChild(cartButton);

  cartButton.addEventListener("click", () => {
    displaycart();
  });

  let logout = document.createElement("button");
  logout.className = "logout";
  logout.id = "logout";
  logout.style.display = "none";
  logout.innerText = "Logout";
  div3.appendChild(logout);
}

// ====================
// signup-form
let signupstatus = false;
let signinstatus = false;
function signup() {
  if (!signupstatus) {
    signupstatus = true;
    let background = document.createElement("div");
    background.className = "background";
    background.id = "signupbackground";
    document.body.appendChild(background);

    let signupconatiner = document.createElement("div");

    signupconatiner.className = "signupconatiner";
    signupconatiner.id = "signupconatiner";

    let form = document.createElement("div");
    form.id = "signupform";
    let heading = document.createElement("h3");
    heading.innerHTML = "Sign-up";

    form.appendChild(heading);
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.required = true;
    emailInput.className = "emailinput";
    emailInput.id = "userEmail";
    emailInput.placeholder = "Enter Your Email ";
    form.appendChild(emailInput);

    let passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.className = "passwordInput";
    passwordInput.required = true;
    passwordInput.id = "userPassword";

    passwordInput.placeholder = "Create Password";
    form.appendChild(passwordInput);

    let submitbtn = document.createElement("button");
    submitbtn.type = "submit";
    submitbtn.className = "submitbtn";
    submitbtn.id = "register";
    submitbtn.innerHTML = "Signup account";

    form.appendChild(submitbtn);

    let backbtn = document.createElement("button");
    backbtn.className = "backbutton";
    backbtn.innerHTML = "Back";
    form.appendChild(backbtn);

    signupconatiner.appendChild(form);
    background.appendChild(signupconatiner);
    document.getElementById("register").addEventListener("click", () => {
      // userSignup();
      addUser();
    });
  }
}

// -------------Sign in---------------
function signin() {
  if (!signinstatus) {
    signinstatus = true;
    let background = document.createElement("div");
    background.className = "background";
    background.id = "signinbackground";
    document.body.appendChild(background);

    let signinconatiner = document.createElement("div");

    signinconatiner.className = "signinconatiner";
    signinconatiner.id = "signinconatiner";

    let form = document.createElement("div");
    form.id = "signinform";
    let heading = document.createElement("h3");
    heading.innerHTML = "Sign-in";

    form.appendChild(heading);
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.required = true;
    emailInput.className = "emailinput";
    emailInput.id = "userEmail";

    emailInput.placeholder = "Enter Your Email ";
    form.appendChild(emailInput);

    let passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.className = "passwordInput";
    passwordInput.required = true;
    passwordInput.id = "userPassword";
    passwordInput.placeholder = "Enter Password";
    form.appendChild(passwordInput);

    let submitbtn = document.createElement("button");
    submitbtn.type = "submit";
    submitbtn.className = "submitbtn";
    submitbtn.id = "login";
    submitbtn.innerHTML = "signin your account";
    form.appendChild(submitbtn);

    let backbtn = document.createElement("button");
    backbtn.className = "backbutton";
    backbtn.id = "backbutton";
    backbtn.innerHTML = "Back";
    form.appendChild(backbtn);

    signinconatiner.appendChild(form);
    background.appendChild(signinconatiner);

    document.getElementById("backbutton").addEventListener("click", () => {
      fetchData();
    });

    document.getElementById("login").addEventListener("click", () => {
      userLogin();
    });
  }
}

//  cart List create
function displaycart() {
  if (productcardstatus) {
    console.log(document.getElementById("backDiv").remove());
    console.log((productcardstatus = false));
  }
  let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
  console.log(cartList);
  // maindiv
  let maindiv = document.createElement("div");
  maindiv.className = "maindiv";
  document.body.appendChild(maindiv);

  // cart box
  let cartBox = document.createElement("div");
  cartBox.className = "cartBox";
  maindiv.appendChild(cartBox);

  for (let product of cartList) {
    // ----
    let containBox = document.createElement("div");
    containBox.className = "containBox";
    cartBox.appendChild(containBox);

    // image box
    let imageBox = document.createElement("div");
    imageBox.className = "imageBox";

    let productImg = document.createElement("img");
    productImg.className = "productImg";
    productImg.src = product["thumnail"];

    // console.log(product["title"])
    imageBox.appendChild(productImg);

    containBox.appendChild(imageBox);

    let discriptionBox = document.createElement("div");
    discriptionBox.className = "discriptionBox";
    containBox.appendChild(discriptionBox);

    let prname = document.createElement("div");
    prname.className = "prname";
    prname.textContent = product["title"];

    let cartprice = document.createElement("div");
    cartprice.className = "cartprice";
    cartprice.textContent = "price  :  " + product["price"] + " /-";

    let dicrement = document.createElement("div");
    dicrement.className = "dicrement";
    dicrement.id = "dicrement";
    dicrement.textContent = "-";

    let quantity = document.createElement("div");
    quantity.className = "quantity";
    quantity.textContent = product["quantity"];

    let increment = document.createElement("div");
    increment.className = "increment";
    increment.id = "increment";
    increment.textContent = "+";

    let removeproduct = document.createElement("div");
    removeproduct.className = "removeproduct";
    removeproduct.textContent = "X";
    discriptionBox.appendChild(prname);
    discriptionBox.appendChild(cartprice);
    discriptionBox.appendChild(dicrement);
    discriptionBox.appendChild(quantity);
    discriptionBox.appendChild(increment);
    discriptionBox.appendChild(removeproduct);

    document.getElementById("increment").addEventListener("click", () => {
      product.quantity = 1 + product["quantity"];
      // cartList[product].quantity =

      if (product.id === itemIdToUpdate) {
        product.quantity = 1 + product["quantity"];
      }
      localStorage.setItem("cartList", JSON.stringify(cartList));
      quantity.textContent = product["quantity"];
    });
  }
  // BillBox---------------
  let billBox = document.createElement("div");
  billBox.className = "billBox";

  let headingbill = document.createElement("h3");
  headingbill.className = "headingbill";
  headingbill.innerHTML = "Cart Total :";

  billBox.appendChild(headingbill);

  let itemQuantity = document.createElement("p");
  itemQuantity.className = "itemQuantity";
  itemQuantity.innerHTML = "items   :";

  let itemQuantityvalue = document.createElement("span");
  itemQuantityvalue.className = "itemQuantityvalue";
  itemQuantityvalue.innerText = "20";
  itemQuantity.appendChild(itemQuantityvalue);
  billBox.appendChild(itemQuantity);

  let gst = document.createElement("p");
  gst.className = "gst";
  gst.innerHTML = "GST   :     ";
  billBox.appendChild(gst);

  let gstvalue = document.createElement("span");
  gstvalue.className = "gstvalue";
  gstvalue.innerText = "20%";
  gst.appendChild(gstvalue);

  let total = document.createElement("p");
  total.className = "total";
  total.innerHTML = "Total   :     ";

  let totalvalue = document.createElement("span");
  totalvalue.className = "totalvalue";
  totalvalue.innerHTML = "12 ";
  total.appendChild(totalvalue);

  billBox.appendChild(total);
  maindiv.appendChild(billBox);
}

// create card and add to cart functionality

function cart(data) {
  console.log(productcardstatus);
  if (!productcardstatus) {
    productcardstatus = true;
    let products = data.products;
    let backDiv = document.createElement("div");
    backDiv.className = "backDiv";
    backDiv.id = "backDiv";
    document.body.appendChild(backDiv);

    products.forEach((product) => {
      let div1 = document.createElement("div");
      div1.id = "allcartcontainer";
      div1.className = "cartitem";
      backDiv.appendChild(div1);

      let carddiv = document.createElement("div");
      carddiv.className = "card";

      let imagediv = document.createElement("div");
      imagediv.className = "image";

      let title = document.createElement("span");
      title.className = "title";
      title.textContent = product.title;

      let price = document.createElement("span");
      price.className = "price";
      price.textContent = product.price + "  /-";

      let cardimage = document.createElement("img");
      cardimage.className = "cardimage";
      cardimage.src = product.thumbnail;

      // Add to Card button
      let addButton = document.createElement("button");
      addButton.textContent = "Add to Cart";
      addButton.className = "add-to-cart-button";
      addButton.addEventListener("click", () => {
        addTocart(product);
      });

      imagediv.appendChild(cardimage);
      carddiv.appendChild(imagediv);
      carddiv.appendChild(title);
      carddiv.appendChild(price);
      carddiv.appendChild(addButton);
      div1.appendChild(carddiv);
    });
  }
}

// fetch data by fetch api from server
function fetchData() {
  const productData = fetch("https://dummyjson.com/products?limit=200");
  productData
    .then((response) => {
      if (!response.ok) {
        throw new Error("network Issue.....!");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      cart(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

createNavvar();
fetchData();
document.getElementById("signupbtn").addEventListener("click", () => {
  document.getElementById("backDiv").style.display = "none";
  signup();

  if (signinstatus) {
    document.getElementById("signinbackground").remove();
    signinstatus = false;
  }
});

document.getElementById("signinbtn").addEventListener("click", () => {
  document.getElementById("backDiv").style.display = "none";
  signin();

  if (signupstatus) {
    document.getElementById("signupbackground").remove();
    signupstatus = false;
  }
});

// user login by email and password
function userLogin() {
  let email = document.getElementById("userEmail").value;
  let password = document.getElementById("userPassword").value;

  // retrieve existing user
  let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email already exists
  const flag = existingUsers.some((user) => {
    loginuserid = user.id;
    return user.email === email && user.password === password;
  });
  if (!flag) {
    loginuserid = 0;
    alert("inavlid email or password !");
    return;
  }

  //   display non of sign up and signin button
  document.getElementById("signupbtn").style.display = "none";
  document.getElementById("signinbtn").style.display = "none";
  document.getElementById("signinbackground").remove();
  document.getElementById("logout").style.display = "inline";
  document.getElementById("cartButton").style.display = "inline";
  loginuseremail = email;
  console.log("hello.................");
  productcardstatus = false;
  fetchData();
}

function addTocart(element) {
  const newProduct = {
    userid: loginuserid,
    id: element.id,
    thumnail: element.thumbnail,
    title: element.title,
    price: element.price,
    quantity: 1,
  };
  // retrieve existing user
  let existingProduct = JSON.parse(localStorage.getItem("cartList")) || [];

  const flag = existingProduct.some((product) => {
    return product.id === element.id && product.userid === loginuserid;
  });

  if (flag) {
    alert("Product already added");
    return;
  }
  existingProduct.push(newProduct);
  // Update localStorage
  localStorage.setItem("cartList", JSON.stringify(existingProduct));
  window.alert("product Added Succesfully.....");
}

function addUser() {
  //   get data to user
  let email = document.getElementById("userEmail").value;
  let password = document.getElementById("userPassword").value;
  // user details
  const newUser = {
    id: localStorage.length + 1,
    email: email,
    password: password,
  };

  // retrieve existing user
  let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email already exists
  const flag = existingUsers.some((user) => {
    return user.email === newUser.email;
  });

  if (flag) {
    alert("User already exists!");
    return;
  }
  // Add  new user
  existingUsers.push(newUser);
  // Update localStorage
  localStorage.setItem("users", JSON.stringify(existingUsers));

  //  hide  sign up and signin button
  document.getElementById("signupbtn").style.display = "none";
  document.getElementById("signinbtn").style.display = "none";
  document.getElementById("signupbackground").remove();
  document.getElementById("logout").style.display = "inline-block";
  document.getElementById("cartButton").style.display = "inline-block";
  fetchData();
}
