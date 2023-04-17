const button = document.getElementById("generate_Button");

button.addEventListener("click", function() {
  // generate random number
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  
  // create new element to display random number
  const result = document.createElement("p");
  result.innerHTML = randomNumber;
  
  // add styling to new element
  result.style.fontSize = "24px";
  result.style.color = "blue";
  
  // insert new element after the button
  button.parentNode.insertBefore(result, button.nextSibling);
  
  // disable button
  button.disabled = false;
});
