// Dark-light mode Javascript
const wrapper = document.querySelector(".dark-light");
const themeToggle = document.querySelector("#dark-toggle");
const themeText = document.querySelector(".theme-text");
let darkTheme = false;
console.log(wrapper);

themeToggle.addEventListener("click", () => {
  wrapper.classList.toggle("dark");
  darkTheme = !darkTheme;
  themeText.textContent = darkTheme ? "DARK" : "LIGHT";
});

// Multiple mode Javascript
const themedContainer = document.querySelector(".multiple");
const selectOptions = document.querySelector("#themes");

selectOptions.addEventListener("input", (e) => {
  themedContainer.className = e.target.value;
});
