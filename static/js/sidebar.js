let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content")

btn.onclick = function () {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
}