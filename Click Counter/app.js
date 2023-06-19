// Variables
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

// Initialize count variable
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count >= 10) {
      counter.style.color = "#BBE1C3";
    }
    counter.textContent = count;
  });
});
