window.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementsByClassName("preloader")[0];
        preloader.classList.add("preloader-finish");
    }, 3000);
}


const tg = {
    token: "5768250980:AAHAbU4niJh-_nKygpkdrXJAe5tX5S_cLv8",
    chat_id: "1622149714"
};

const form = document.querySelector("#form");
const ism = document.querySelector("#name");
const surname = document.querySelector("#surname");
const phone_number = document.querySelector("#phone_number")
const rating = document.querySelector("#rating");
const age = document.querySelector("#age");
const message = document.querySelector("#message");


function sendFormData() {

    const formData = `Ismi : ${ism.value} %0A %0A Familyasi : ${surname.value} %0A %0A  Yoshi : ${age.value} %0A %0A Telefon raqami : ${phone_number.value}  %0A %0A Saytni baxoladi: ${rating.value} %0A %0A %0A Xabar: ${message.value}`;


    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${formData}`;
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendFormData();
});


const infoBtns = document.querySelectorAll('#info-btn');
infoBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.nextElementSibling.style.display = 'block';
    });
});