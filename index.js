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

let addNewBlog = function () {
  let mainDiv = document.querySelector("div.col-md-8")
  let addDiv = document.createElement("div")
  mainDiv.appendChild(addDiv)
  addDiv.classList.add("blog-post")
  let addH2 = document.createElement("h2")
  addH2.innerText = "New Blog"
  addH2.classList.add("blog-post-title")
  let addP = document.createElement("p")
  addP.innerText = "Some Text Inside P"
  addP.classList.add("blog-post-meta")
  addDiv.appendChild(addH2)
  addDiv.appendChild(addP)
}

addNewBlog()
