// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("description").textContent = "The paragraph text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById("changeColorBtn").addEventListener("click", function () {
  const box = document.getElementById("colorBox");
  box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
  box.style.color = "white";
  box.style.padding = "10px";
});

// Add or remove an element when a button is clicked
document.getElementById("addItemBtn").addEventListener("click", function () {
  const ul = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${ul.children.length + 1}`;
  ul.appendChild(newItem);
});

document.getElementById("removeItemBtn").addEventListener("click", function () {
  const ul = document.getElementById("itemList");
  if (ul.lastChild) {
    ul.removeChild(ul.lastChild);
  }
});
