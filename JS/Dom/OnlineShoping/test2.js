var loginuseremail = "";
var loginuserid = 0;
// creating navvar.
function createNavvar() {
    var nav = document.createElement("div");
    nav.className = "nav";

    //    logo
    let div1 = document.createElement("div");
    div1.className = "logodiv"
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
    button1.id = "signupbtn"
    button1.innerText = "sign-up"
    div3.appendChild(button1);

    let button2 = document.createElement("button");
    button2.className = "signinbtn";
    button2.id = "signinbtn"
    button2.innerText = "sign-in"
    div3.appendChild(button2);


    let cartButton = document.createElement("button");
    cartButton.className = "cartButton";
    cartButton.style.display = "none";
    cartButton.id = "cartButton"
    cartButton.innerText = "Cart"
    div3.appendChild(cartButton);


    let logout = document.createElement("button");
    logout.className = "logout";
    logout.id = "logout"
    logout.style.display = "none";
    logout.innerText = "Logout"
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
        background.className = "background"
        background.id = "signupbackground"
        document.body.appendChild(background);

        let signupconatiner = document.createElement("div");

        signupconatiner.className = "signupconatiner";
        signupconatiner.id = "signupconatiner";

        let form = document.createElement("div");
        form.id = "signupform"
        let heading = document.createElement("h3");
        heading.innerHTML = "Sign-up";

        form.appendChild(heading);
        let emailInput = document.createElement("input");
        emailInput.type = 'email';
        emailInput.required = true;
        emailInput.className = "emailinput"
        emailInput.id = "userEmail"
        emailInput.placeholder = "Enter Your Email "
        form.appendChild(emailInput);

        let passwordInput = document.createElement("input");
        passwordInput.type = 'password';
        passwordInput.className = "passwordInput";
        passwordInput.required = true;
        passwordInput.id = "userPassword";

        passwordInput.placeholder = "Create Password";
        form.appendChild(passwordInput);

        let submitbtn = document.createElement("button");
        submitbtn.type = 'submit';
        submitbtn.className = "submitbtn";
        submitbtn.id = "register"
        submitbtn.innerHTML = "Signup account";

        form.appendChild(submitbtn);

        let backbtn = document.createElement("button");
        backbtn.className = "backbutton";
        backbtn.innerHTML = "Back";
        form.appendChild(backbtn);

        signupconatiner.appendChild(form);
        background.appendChild(signupconatiner);
        document.getElementById("register").addEventListener("click", () => {
            userSignup();
        });
    }
}

// -------------Sign in---------------
function signin() {

    if (!signinstatus) {
        signinstatus = true;
        let background = document.createElement("div");
        background.className = "background"
        background.id = "signinbackground"
        document.body.appendChild(background);

        let signinconatiner = document.createElement("div");

        signinconatiner.className = "signinconatiner";
        signinconatiner.id = "signinconatiner";

        let form = document.createElement("div");
        form.id = "signinform"
        let heading = document.createElement("h3");
        heading.innerHTML = "Sign-in";

        form.appendChild(heading);
        let emailInput = document.createElement("input");
        emailInput.type = 'email';
        emailInput.required = true;
        emailInput.className = "emailinput";
        emailInput.id = "userEmail";

        emailInput.placeholder = "Enter Your Email "
        form.appendChild(emailInput);

        let passwordInput = document.createElement("input");
        passwordInput.type = 'password';
        passwordInput.className = "passwordInput";
        passwordInput.required = true;
        passwordInput.id = "userPassword";
        passwordInput.placeholder = "Enter Password";
        form.appendChild(passwordInput);

        let submitbtn = document.createElement("button");
        submitbtn.type = 'submit';
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


// cart/product
// function cart(data) {
//     let prodcut = data.prodcuts;
//     let backDiv = document.createElement("div");
//     backDiv.className = "backDiv";
//     backDiv.id = "backDiv";
//     document.body.appendChild(backDiv);

//     // data print
//     data["products"].forEach(element => {

//         let div1 = document.createElement("div");
//         div1.className = "cartitem";
//         backDiv.appendChild(div1);
//         let carddiv = document.createElement("div");
//         carddiv.className = "card";

//         let imagediv = document.createElement("div");
//         imagediv.className = "image";

//         let title = document.createElement("span");
//         title.className = "title";
//         title.textContent = element.title;
//         let price = document.createElement("span");
//         price.className = "price";
//         price.textContent = element.price + "  /-"

//         let cardimage = document.createElement("img");
//         cardimage.className = "cardimage";
//         cardimage.src = element.thumbnail;

//         imagediv.appendChild(cardimage);
//         carddiv.appendChild(imagediv);
//         carddiv.appendChild(title);
//         carddiv.appendChild(price);
//         div1.appendChild(carddiv);
//     });


// }


// test
// Function to create the product cards and add to cart functionality
function cart(data) {
    let products = data.products;
    let backDiv = document.createElement("div");
    backDiv.className = "backDiv";
    backDiv.id = "backDiv";
    document.body.appendChild(backDiv);

    products.forEach(product => {
        let div1 = document.createElement("div");
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



// fetch data by fetch api from server
function fetchData() {
    const productData = fetch('https://dummyjson.com/products');
    productData.then((response) => {
        if (!response.ok) {
            throw new Error("network Issue.....!");
        } else {
            return response.json();
        }
    }).then((data) => {

        cart(data);
    }).catch((error) => {
        console.log(error, "dtdutdutdfutdd");

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


//  Store Data in Local Storage.
function userSignup() {
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;

    //    check for exist user details
    for (var i = 1; i <= localStorage.length; i++) {
        let retrievedObj = JSON.parse(localStorage.getItem(i));
        if (retrievedObj["email"] === email) {
            window.alert("User Allready Registerd...!!!");
            return;
        }
    }

    const user = { email: email, password: password }
    localStorage.setItem(`${localStorage.length + 1}`, JSON.stringify(user));
    window.alert("Succesful  Registerd...");

    //   hide of sign up and signin button
    document.getElementById("signupbtn").style.display = "none";
    document.getElementById("signinbtn").style.display = "none";
    document.getElementById("signupbackground").remove();
    document.getElementById("logout").style.display = "block";
    document.getElementById("cartButton").style.display = "block";
    fetchData();
    return;
}

function userLogin() {
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;
    for (var i = 1; i <= localStorage.length; i++) {
        let retrievedObj = JSON.parse(localStorage.getItem(i));
        if (retrievedObj["email"] === email && retrievedObj["password"] === password) {
            window.alert(email + "  succesfull login...");

            //   display non of sign up and signin button
            document.getElementById("signupbtn").style.display = "none";
            document.getElementById("signinbtn").style.display = "none";
            document.getElementById("signinbackground").remove();
            document.getElementById("logout").style.display = "inline";
            document.getElementById("cartButton").style.display = "inline";
            loginuseremail = email;
            loginuserid = i;
            fetchData();


            //   Set login Data in Session Storage 
            sessionStorage.setItem('username', 'john_doe');


            return;
        }
    }
    window.alert("email Or password invalid");
}

function addTocart(element) {

    let product = {
        "id": element.id,
        "thumnail": element.thumbnail,
        "title": element.title,
        "price": element.price,
        "quantity": 1
    }

    // let retrievedObj = JSON.parse(localStorage.getItem(loginuserid));


    // if (retrievedObj["email"] === email) {
    //     window.alert("User Allready Registerd...!!!");
    //     return;
    // }

    localStorage.setItem("card", JSON.stringify(product));
    window.alert("Succesful  Added...");

}
