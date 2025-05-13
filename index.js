const monthnameEL = document.getElementById("month-name");
const daynameEL = document.getElementById("day-name");
const daynumberEL = document.getElementById("day-number");
const yearEL = document.getElementById("year");

// Create a <p> tag with ID time inside your HTML file:
const timeEl = document.createElement("p");
timeEl.classList.add("time_container");
document.querySelector(".calander-container").appendChild(timeEl);

// Set date once
const date = new Date();
monthnameEL.innerText = date.toLocaleString("en", { month: "long" });
daynameEL.innerText = date.toLocaleString("en", { weekday: "long" });
daynumberEL.innerText = date.getDate();
yearEL.innerText = date.getFullYear();

// Update time every second
setInterval(() => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  timeEl.innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);



