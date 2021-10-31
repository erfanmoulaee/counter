var decrease = document.querySelector(".decrease");
var increase = document.querySelector(".increase");
var reset = document.querySelector(".reset");
var value = document.querySelector("#value");
var counter = 0;

decrease.addEventListener("click", (e) => {
  value.style.color = "red";
  counter = counter - 1;
  value.innerHTML = counter;
});

increase.addEventListener("click", (e) => {
  value.style.color = "green";
  counter = counter + 1;
  value.innerHTML = counter;
});
reset.addEventListener("click", (e) => {
  value.style.color = "black";
  counter = 0;
  value.innerHTML = counter;
});
