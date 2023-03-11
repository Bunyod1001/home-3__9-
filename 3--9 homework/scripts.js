"use strict";


let form = document.querySelector("#form");
let elBody = document.querySelector("body");
let elModeBtn = document.querySelector("#modeBtn");

elModeBtn.addEventListener("click", evt => {
    if (elModeBtn.textContent == "dark") {
      elBody.classList.add("light");
      elBody.classList.remove("dark");
      elModeBtn.textContent = "light";
    } else if (elModeBtn.textContent == "light") {
      elBody.classList.add("dark");
      elBody.classList.remove("light");
      elModeBtn.textContent = "dark";
    }
})




