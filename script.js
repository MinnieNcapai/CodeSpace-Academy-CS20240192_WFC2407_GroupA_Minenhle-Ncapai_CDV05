const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");

hamBtn.addEventListener("click", () => {
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");
});
const day = document.querySelector(".day");

day.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  day.style.display = "none";
  night.style.display = "block";
});
const night = document.querySelector(".night");

night.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  night.style.display = "none";
  day.style.display = "block";
});

const preloader = document.querySelector(".pre-loader");

window.addEventListener("load", () => (preloader.style.display = "none"));


const conbtn = document.querySelector(".conbtn");
const navBtn1 = document.querySelector(".nav-btn1");
const navBtn2 = document.querySelector(".nav-btn2");
const navBtn3 = document.querySelector(".nav-btn3");
const navBtn4 = document.querySelector(".nav-btn4");
const navBtn5 = document.querySelector(".nav-btn5");

const about = document.querySelector(".row");
const skills = document.querySelector(".skills");
const portfolio = document.querySelector(".portfolios");
const services = document.querySelector(".services");
const contact = document.querySelector(".contact");

