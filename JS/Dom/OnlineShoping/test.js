




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

}





// cart/product
function cart(data) {
    let prodcut = data.prodcuts;
    let backDiv = document.createElement("div");
    backDiv.className = "backDiv";
    backDiv.id = "backDiv";
    document.body.appendChild(backDiv);

    // data print
    data["products"].forEach(element => {

        let div1 = document.createElement("div");
        div1.className = "cartitem";
        backDiv.appendChild(div1);
        let carddiv = document.createElement("div");
        carddiv.className = "card";

        let imagediv = document.createElement("div");
        imagediv.className = "image";

        let title = document.createElement("span");
        title.className = "title";
        title.textContent = element.title;
        let price = document.createElement("span");
        price.className = "price";
        price.textContent = element.price + "  /-"

        let cardimage = document.createElement("img");
        cardimage.className = "cardimage";
        cardimage.src = element.thumbnail;

        imagediv.appendChild(cardimage);
        carddiv.appendChild(imagediv);
        carddiv.appendChild(title);
        carddiv.appendChild(price);
        div1.appendChild(carddiv);
    });
}








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

        let form = document.createElement("form");
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

        document.getElementById("signinform").addEventListener("submit", () => {
            userLogin();
        });

    }
}
