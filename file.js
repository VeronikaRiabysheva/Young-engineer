const images = document.querySelectorAll(".slider-img");
const controlls = document.querySelectorAll(".controlls");
let imageIndex = 0;
const feedName = document.querySelectorAll(".feedName");
let feedNameIndex = 0;
const feedImageSliders = document.querySelectorAll(".feed-sliders");
let feedImageSlidersIndex = 0;
const feedbackButton = document.querySelectorAll(".feedback_button");
let feedbackButtonIndex = 0;

function show(index) {
  images[imageIndex].classList.remove("active");
  images[index].classList.add("active");
  imageIndex = index;
  feedName[feedNameIndex].classList.remove("active");
  feedName[index].classList.add("active");
  feedNameIndex = index;
  feedImageSliders[feedImageSlidersIndex].classList.remove("active");
  feedImageSliders[index].classList.add("active");
  feedImageSlidersIndex = index;
  feedbackButton[feedbackButtonIndex].classList.remove("active");
  feedbackButton[index].classList.add("active");
  feedbackButtonIndex = index;
}

controlls.forEach((e) => {
  e.addEventListener("click", () => {
    if (event.target.classList.contains("prev")) {
      let index = imageIndex - 1;

      if (index < 0) {
        index = images.length - 1;
      }

      show(index);
    } else if (event.target.classList.contains("next")) {
      let index = imageIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
      show(index);
    }
  });
});

show(imageIndex);
