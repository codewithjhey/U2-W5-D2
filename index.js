let addNewLink = function () {
  let nav = document.querySelector(".nav")
  let addLink = document.createElement("span")
  addLink.innerText = "New Link"
  nav.appendChild(addLink)
}

addNewLink()

let changeMainHeading = function () {
  let title = document.querySelector(".display-4")
  title.style.color = "purple"
}

changeMainHeading()

let changeJumbotronColor = function () {
  let jumbotron = document.querySelector("div.jumbotron")
  jumbotron.style.backgroundColor = "blue"
}

changeJumbotronColor()

window.onload = () => {
  let removeTwitter = document.querySelector(
    "aside div:nth-child(3) ol li:nth-child(2)"
  )
  removeTwitter.remove()
}
