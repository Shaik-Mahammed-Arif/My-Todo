const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
    if (inputbox.value === '') {
        alert("Please Write Something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    };
}, false);


document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        addtask();
    }
});
function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function dateoftodo() {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    document.getElementById("dateandtime").innerHTML = `${day} <br> ${month}  <br>  ${year} `;
}

dateoftodo();
showtask();
