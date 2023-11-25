let titleName = document.querySelector("#title");
let authorName = document.querySelector("#author");
let colorName = document.querySelector("#color");
let tableBody = document.querySelector("tbody");
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let checkedInput = document.querySelector('input[name="book"]:checked');
    if (!titleName.value || !authorName.value || !colorName.value || !checkedInput) {
        alert("Məlumatlar boş ola bilməz!");
        return;
    }
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = titleName.value;
    let td2 = document.createElement("td");
    td2.textContent = authorName.value;
    let td3 = document.createElement("td");
    td3.textContent = checkedInput.value;
    tr.style.backgroundColor = colorName.value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tableBody.appendChild(tr);
});

