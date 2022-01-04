var answer = document.getElementById('anyerror');
answer.classList.add("animate__animated");
answer.classList.add("animate__zoomInRight");
answer.style.width = '100%';
function emailvalidation() {
    var email = document.getElementById("email").value;
    var re = /\S+@\S+\.\S+/;
    var i = re.test(email);
    if (i !== true) {
        answer.classList.remove("alert-success");
        answer.classList.add("alert");
        answer.classList.add("alert-danger");
        answer.innerHTML = "ایمیل را به درستی وارد کنید";

    }
}

function checkform() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;

    if (!isNaN(fname) || !isNaN(lname) || !isNaN(email)) {
        
        answer.classList.remove("alert-success");
        answer.classList.add("alert");
        answer.classList.add("alert-danger");
        answer.innerHTML = "لطفا دقت نمایید";

    }
    else {
        answer.style.width = '100%';
        answer.classList.remove("alert-danger");
        answer.classList.add("alert");
        answer.classList.add("alert-success");
        answer.innerHTML = "با تشکر از مشارکت شما";
    }
}

