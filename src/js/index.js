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
  img5,
  img1,
  img2,
  img3,
  img4,
  img5,
  img1,
  img2,
  img3,
  img4,
  img5,
];
const slider = document.getElementById("slide");
const nav = document.getElementById("slide-nav");

addEventListener("load", () => {
  const sliderFragment = document.createDocumentFragment();
  const navFragment = document.createDocumentFragment();
  imgs.forEach((img, index) => {
    // Slide
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    imgDiv.setAttribute("data-id", `${index}`);
    imgDiv.style.backgroundImage = `url("${img}")`;
    imgDiv.addEventListener("animationstart", (e) => {
      e.target.style.zIndex = 200;
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.style.zIndex = 100;
      } else {
        slider.firstElementChild.style.zIndex = 100;
      }
    });
    imgDiv.addEventListener("animationend", (e) => {
      const navButtons = [...document.querySelectorAll(".nav-div")];
      const [activeButton] = navButtons.filter(
        (button) => button.dataset.id === e.target.dataset.id
      );
      activeButton.classList.remove("nav-div--active");
      e.target.classList.remove("img-div--animate");
      e.target.style.zIndex = 0;
      if (e.target.nextElementSibling) {
        const [nextButton] = navButtons.filter(
          (button) =>
            button.dataset.id === e.target.nextElementSibling.dataset.id
        );
        e.target.nextElementSibling.classList.add("img-div--animate");
        nextButton.classList.add("nav-div--active");
      } else {
        const [nextButton] = navButtons.filter(
          (button) => button.dataset.id === slider.firstElementChild.dataset.id
        );
        slider.firstElementChild.classList.add("img-div--animate");
        nextButton.classList.add("nav-div--active");
      }
    });
    sliderFragment.appendChild(imgDiv);
    // Nav
    const navDiv = document.createElement("div");
    navDiv.classList.add("nav-div");
    navDiv.setAttribute("data-id", `${index}`);
    navFragment.appendChild(navDiv);
  });
  slider.appendChild(sliderFragment);
  nav.appendChild(navFragment);
  slider.firstElementChild.classList.add("img-div--animate");
  nav.firstElementChild.classList.add("nav-div--active");
});
