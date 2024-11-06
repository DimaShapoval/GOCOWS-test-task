import { initialState, setInitialState } from "./state.js";

const hoverButton = document.getElementById("hoverButton");
const hoverButtonMobile = document.getElementById("hoverButtonMobile");
const initialStateForHover = initialState;

window.addEventListener("DOMContentLoaded", () => {
  const toggleClass = () => {
    const spins = document.getElementById("spins");
    const visitButton = document.getElementById("visitButton");
    const loadMoreButton = document.getElementById("loadMoreButton");
    const modalWrapper = document.getElementById("modalWrapper");

    if (
      hoverButton.textContent === "DEFAULT" ||
      hoverButtonMobile.textContent === "DEFAULT"
    ) {
      hoverButton.textContent = "Hovers";
      hoverButtonMobile.textContent = hoverButton.textContent;
      hoverButton.classList.remove("active");
      hoverButtonMobile.classList.remove("active");
      loadMoreButton.classList.remove("hide");
      loadMoreButton.classList.remove("active");
      spins.classList.remove('active')
      visitButton.classList.remove("active");
      setInitialState(initialStateForHover);
    } else {
      hoverButton.textContent = "DEFAULT";
      hoverButtonMobile.textContent = hoverButton.textContent;
      hoverButton.classList.add("active");
      hoverButtonMobile.classList.add("active");
      loadMoreButton.classList.add("active");
      spins.classList.add("active");
      visitButton.classList.add("active");
    }
  };

  hoverButton.addEventListener("click", () => toggleClass());
  hoverButtonMobile.addEventListener("click", () => toggleClass());
});
