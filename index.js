const container = document.querySelector(".container")
const thankPage = document.querySelector(".thankPage")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")
const submitButton = document.getElementById("submit")
const rateAgainButton = document.getElementById("rate-again")

submitButton.addEventListener("click",() => {
  thankPage.classList.remove("hidden")
  container.classList.add("hidden")
  // container.style.display = "none"
})

rateAgainButton.addEventListener("click", () => {
  thankPage.classList.add("hidden");
  container.classList.remove("hidden")
})

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
})

