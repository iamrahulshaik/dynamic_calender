const monthnameEL = document.getElementById("month-name");
const daynameEL = document.getElementById("day-name");
const daynumberEL = document.getElementById("day-number");
const yearEL = document.getElementById("year");

const date = new Date();
monthnameEL.innerText = date.toLocaleString("en", {
    month: "long" 
});

daynameEL.innerText = date.toLocaleString("en", {
    weekday: "long" 
});

daynumberEL.innerText = date.getDate();

yearEL.innerText = date.getFullYear();


