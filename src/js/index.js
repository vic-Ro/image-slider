import "../sass/styles.scss";
import img1 from "../assets/imgs/1.jpg";
import img2 from "../assets/imgs/2.jpg";
import img3 from "../assets/imgs/3.jpg";
import img4 from "../assets/imgs/4.jpg";
import img5 from "../assets/imgs/5.jpg";

const imgs = [
  img1,
  img2,
  img3,
  img4,
  img5
];
const slider = document.getElementById("slide");
const nav = document.getElementById("slide-nav");

addEventListener("load", () => {
  const sliderFragment = document.createDocumentFragment();
  const navFragment = document.createDocumentFragment();
  const leftControl = document.querySelector('.slide-control--left')
  const rightControl = document.querySelector('.slide-control--right')
  imgs.forEach((img, index) => {
    // Slide
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    imgDiv.setAttribute("data-id", `${index}`);
    imgDiv.style.backgroundImage = `url("${img}")`;
    sliderFragment.appendChild(imgDiv);
    // Nav
    const navDiv = document.createElement("div");
    navDiv.classList.add("nav-div");
    navDiv.setAttribute("data-id", `${index}`);
    navFragment.appendChild(navDiv);
    navDiv.addEventListener('click', (e) => {
      const imgDivs = [...document.querySelectorAll('.img-div')];
      const navDivs = [...document.querySelectorAll('.nav-div')];
      const [activeImg] = imgDivs.filter((div) => div.classList.contains('img-div--active'));
      const [activeNav] = navDivs.filter((button) => button.classList.contains('nav-div--active'));
      const [targetImg] = imgDivs.filter((div) => div.dataset.id === e.target.dataset.id);

      activeImg.classList.remove('img-div--active');
      activeNav.classList.remove('nav-div--active');
      e.target.classList.add('nav-div--active');
      targetImg.classList.add('img-div--active');
    });
  });
  slider.appendChild(sliderFragment);
  nav.appendChild(navFragment);
  slider.firstElementChild.classList.add("img-div--active");
  nav.firstElementChild.classList.add("nav-div--active");

  rightControl.addEventListener("click", () => {
    const imgDivs = [...document.querySelectorAll('.img-div')];
    const navDivs = [...document.querySelectorAll('.nav-div')];
    const [activeImg] = imgDivs.filter((div) => div.classList.contains('img-div--active'));
    const [activeNav] = navDivs.filter((button) => button.classList.contains('nav-div--active'));
    activeImg.classList.remove('img-div--active');
    activeNav.classList.remove('nav-div--active');
    if (activeImg.nextElementSibling) {
      activeImg.nextElementSibling.classList.add('img-div--active');
      activeNav.nextElementSibling.classList.add('nav-div--active');
    } else {
      slider.firstElementChild.classList.add('img-div--active');
      nav.firstElementChild.classList.add('nav-div--active');
    }
  });

  leftControl.addEventListener("click", () => {
    const imgDivs = [...document.querySelectorAll('.img-div')];
    const navDivs = [...document.querySelectorAll('.nav-div')];
    const [activeImg] = imgDivs.filter((div) => div.classList.contains('img-div--active'));
    const [activeNav] = navDivs.filter((button) => button.classList.contains('nav-div--active'));
    activeImg.classList.remove('img-div--active');
    activeNav.classList.remove('nav-div--active');
    if (activeImg.previousElementSibling) {
      activeImg.previousElementSibling.classList.add('img-div--active');
      activeNav.previousElementSibling.classList.add('nav-div--active');
    } else {
      slider.lastElementChild.classList.add('img-div--active');
      nav.lastElementChild.classList.add('nav-div--active');
    }
  });
});
