document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    const passField = document.getElementById('pass-field');
    const passValue = passField.value;
    if(emailValue === "monir@gmail.com" && passValue === "Monir@123") {
        window.location.href = "money.html";
    }
    else {
        alert("Your email and password incorect");
    }
});