const inputBox = document.querySelector("#input-box");
const btn = document.querySelector(".btn");
const listContainer = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("please write a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = ` <div> <span></span> ${inputBox.value}</div> <i>\u00d7</i> `;
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", (e) => {
  const itemDetails = document.querySelector("#list-container li div");

  if (e.target.tagName === "SPAN") {
    itemDetails.classList.toggle("checked");
  } else if (e.target.tagName === "I") {
    e.target.parentElement.remove();
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

console.log(localStorage.getItem("data"));

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showList();
