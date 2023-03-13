
const sliderInput = document.querySelector(".slider__input")

sliderInput.value = 50

sliderInput.addEventListener("input", e => setSliderPosition(e));

sliderInput.addEventListener("change", e => setSliderPosition(e));

const setSliderPosition = e => {
    const element = e.target.closest(".slider");
    const pos = e.target.value;

    element.querySelector(".slider__image.before").style.width = `${pos}%`;
    element.querySelector(".slider__button").style.left = `calc(${pos}% - 18px)`;
}
