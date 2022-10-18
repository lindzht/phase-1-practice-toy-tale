let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  //FETCHING JSON DATA
  fetch("http://localhost:3000/toys")
  .then( response => response.json())
  .then( collection => {
    collection.forEach(toy => {
      newToyCard(toy);
    })
  });


  //POST REQUEST DATA TO JSON




  fetch("http://localhost:3000/toys", { configurationObject} )
  .then (response => response.json())
  .then (object => {
    console.log(object);
  })

  //ADD TOY INFO TO CARD
  function newToyCard (toy){
    const divContainer = document.querySelector("#toy-collection");

    const div = document.createElement("div");
    div.classList.add("card");
    
    const header = document.createElement("h2");
    header.textContent = toy.name;

    const img = document.createElement("img");
    img.classList.add("toy-avatar");
    img.src = toy.image;

    const p = document.createElement("p");
    const likes = toy.likes
    p.textContent = `${likes} Likes`

    const button = document.createElement("button");
    button.classList.add("like-btn");
    button.setAttribute(`id`, `${toy.id}`);
    button.textContent = "Like ❤️";

    divContainer.append(div);
    div.append(header, img, p, button);

  };

  //ADD A NEW TOY


});
