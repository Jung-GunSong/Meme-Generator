const imageURL = document.querySelector("#image-url-input");
const submit = document.querySelector("#submit-button");
const topText = document.querySelector("#top-text-input");
const botText = document.querySelector("#bottom-text-input");
const memeArea = document.querySelector("#memes");

let imageURLAddress = null;
let topTextContent = null;
let botTextContent = null;

submit.addEventListener("click", function(){
  imageURLAddress = imageURL.value;
  topTextContent = topText.value;
  botTextContent = botText.value;

  const newMemeDiv = document.createElement("div");
  const newMeme = document.createElement("img");
  const newMemeTop = document.createElement("div");
  const newMemeBottom = document.createElement("div");
  const hoverText = document.createElement("div");
  // const hoverMessage = document.createElement("div");

  newMemeDiv.setAttribute("id", "new-meme-container");
  newMemeDiv.classList.add("w-50", "d-flex", "justify-content-center");

  newMeme.setAttribute("src", `${imageURLAddress}`);
  newMeme.classList.add("img-fluid");

  newMemeTop.setAttribute("id","top-text-meme");
  newMemeTop.textContent = topTextContent;


  newMemeBottom.setAttribute("id","bot-text-meme");
  newMemeBottom.textContent = botTextContent;

  hoverText.setAttribute("id","hover-text-div");
  hoverText.textContent = "Click here to remove!";
  hoverText.classList.add("fs-1")

  // hoverMessage.setAttribute("id", "hover-text");
  // hoverMessage.textContent = "Click here to remove!"

  memeArea.append(newMemeDiv);
  newMemeDiv.append(newMeme);
  newMemeDiv.append(newMemeTop);
  newMemeDiv.append(newMemeBottom);
  newMemeDiv.append(hoverText);
  // hoverTextDiv.append(hoverMessage);
  console.log(memeArea);
})


memeArea.addEventListener("click", function(e){
  if(e.target.tagName === "DIV"){
    e.target.parentElement.remove();
  }
})