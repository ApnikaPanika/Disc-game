const button = document.querySelector(".pickButton")
const textPlace = document.querySelector(".textPlace")

const data = [
    "Test",
    "Test 1",
    "Test 2",
    "Test 3"
]

button.addEventListener("click", () => {
    const randomId = Math.floor(Math.random()*data.length)

    textPlace.textContent = "Choosing..."

    setTimeout(() => {
        textPlace.textContent = data[randomId]
    }, 1000)
})