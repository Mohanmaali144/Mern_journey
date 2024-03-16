function validation(event) {
    let fullname = document.getElementById("fullname").value;
    let designation = document.getElementById("designation").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let resume = document.getElementById("resume").value;
    let gender = document.querySelectorAll("input[name='gender']:checked");

    let isValid = true;

    if (!fullname.match(/^[a-zA-Z ,.'-]+$/)) {
        let err = document.getElementById("fullname-error");
        err.style.color = "red";
        err.innerHTML = "invalid fullname";
        isValid = false;
    } else {
        let err = document.getElementById("fullname-error");
        err.innerText = "";
    }

    if (designation == "" || designation == null) {
        let err = document.getElementById("designation-error");
        err.style.color = "red";
        err.innerText = "invalid designation";
        isValid = false;
    } else {
        let err = document.getElementById("designation-error");
        err.innerText = "";
    }


    if (!validateDOB(dob)) {
        let err = document.getElementById("dob-error");
        err.style.color = "red";
        err.innerText = "invalid DOB";
        isValid = false;
    } else {
        let err = document.getElementById("dob-error");
        err.innerText = "";
    }

    if (!email || !email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
        let err = document.getElementById("email-error");
        err.style.color = "red";
        err.innerText = "Please Enter a  email";
        isValid = false;
    } else {
        let err = document.getElementById("email-error");
        err.innerText = "";
    }

    if (gender.length === 0) {
        let err = document.getElementById("gender-error");
        err.style.color = "red";
        err.innerText = "Please select a gender";
        isValid = false;
    } else {
        let err = document.getElementById("gender-error");
        err.innerText = "";
    }

    if (password == null || password == "" || password.length < 5) {
        let err = document.getElementById("password-error");
        err.style.color = "red";
        err.innerText = "Please Enter a valid password";
        isValid = false;
    } else {
        let err = document.getElementById("password-error");
        err.innerText = "";
    }
    if (password !== cpassword) {
        let err = document.getElementById("cpassword-error");
        err.style.color = "red";
        err.innerText = "conferm password not mached";
        isValid = false;
    } else {
        let err = document.getElementById("cpassword-error");
        err.innerText = "";
    }
    if (resume == null || resume == "") {
        let err = document.getElementById("resume-error");
        err.style.color = "red";
        err.innerText = "file not selected";
        isValid = false;
    } else {
        let err = document.getElementById("resume-error");
        err.innerText = "";
    }


    if (!isValid) {
        event.preventDefault();
    }

    return isValid;
}





function validateDOB(dobStr) {
    var dob = new Date(dobStr);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age >= 5;
}