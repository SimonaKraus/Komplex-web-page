const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

const topButton = document.querySelector(".topBtn");
window.addEventListener("scroll", (e) => {
  topButton.style.display = window.scrollY > 20 ? "block" : "none";
});

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

function validate_password() {
  let pass = document.getElementById("pass").value;
  let confirm_pass = document.getElementById("confirm_pass").value;
  if (pass != confirm_pass) {
    document.getElementById("wrong_pass_alert").style.color = "red";
    document.getElementById("wrong_pass_alert").innerHTML =
      "☒ Hesla se neshodují";
    document.getElementById("create").disabled = true;
    document.getElementById("create").style.opacity = 0.4;
  } else {
    document.getElementById("wrong_pass_alert").style.color = "green";
    document.getElementById("wrong_pass_alert").innerHTML = "🗹 Správně";
    document.getElementById("create").disabled = false;
    document.getElementById("create").style.opacity = 1;
  }
}

function wrong_pass_alert() {
  if (
    document.getElementById("pass").value != "" &&
    document.getElementById("confirm_pass").value != ""
  ) {
    alert("Your response is submitted");
  } else {
    alert("Please fill all the fields");
  }
}
