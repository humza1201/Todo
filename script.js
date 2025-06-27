const inputfield = document.getElementById("taskInput");
const ulList = document.querySelector(".list");

function addTask() {
    if (inputfield.value.trim() === "") {
        alert("Please enter a task to add.");
        return;

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputfield.value;
        ulList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
        span.className = "close";
        inputfield.value = "";
    }
    saveTasks();
}

ulList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("tick");
        saveTasks();
    } else if (e.target.className === "close") {
        e.target.parentElement.remove();
        saveTasks();
    }
},false);

function saveTasks() {
    localStorage.setItem("tasks stored", ulList.innerHTML);
}

function display(){
    ulList.innerHTML = localStorage.getItem("tasks stored");
}

window.onload = display;