let count = 0;

const countHearder = document.getElementById("count");

// get the add id
const countAddBtn = document.getElementById("add");
const countSubractBtn = document.getElementById("sub");
// display count
countHearder.innerText = count;

// add event listener so that if you click it will increment
countAddBtn.addEventListener("click", () => {
  count++;
  countHearder.innerText = count;
});

// add event listener so that if you click it will decrement
countSubractBtn.addEventListener("click", () => {
  count--;
  countHearder.innerHTML = count;
});
