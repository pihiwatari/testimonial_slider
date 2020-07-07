//selectores

//botones
const $prevButton = document.getElementById("previous")
const $nextButton = document.getElementById("next")


const tanya = document.getElementsByClassName("first")
const tanyaList = Array.from(tanya)
const john = document.getElementsByClassName("second")
const johnList = Array.from(john)


//funciones

const showElement = (element) => {
  element.classList.toggle("hidden")
}

const showPersona = (persona) => {
  persona.forEach( item => {
    showElement(item)
  })
}

$nextButton.addEventListener("click", () => {
  showPersona(tanyaList)
  showPersona(johnList)
})

$prevButton.addEventListener("click", () => {
  showPersona(tanyaList)
  showPersona(johnList)
})