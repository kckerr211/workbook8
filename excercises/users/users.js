"use strict";

//wire up fucntions to events
window.onload = function () {
  //get html elements
  let usersTableBody = document.querySelector("#usersTableBody");

  //wire up functions
  async function loadUsers() {
    let reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    let userData = await reponse.json();
    for (const user of userData) {
      buildTicketRow(user);
    }
  }

  function buildTicketRow(user) {
    let row = usersTableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerText = user.name;

    let cell2 = row.insertCell(1);
    cell2.innerText = user.email;

    let cell4 = row.insertCell(2);
    let l1 = document.createElement("l");
    l1.innerText = "edit";
    l1.href = "edit.html";
    cell4.appendChild(l1);

    let cell5 = row.insertCell(3);
    let l2 = document.createElement("l");
    l2.innerText = "delete";
    l2.href = "delete.html";
    cell5.appendChild(l2);
  }
  loadUsers();
};

//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(reponse) => reponse.json()
//   .then
