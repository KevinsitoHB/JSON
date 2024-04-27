'use strict';
const $employeesTbody = document.getElementById('employeesTbody');
const $buttonLoad = document.getElementById('buttonLoad');

// EVENTS
document.addEventListener('click', () => {
  buttonLoadClick();
});
// FUNCTIONS
async function getEmployees() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const employeeResponse = await response.json();
    console.log('Employees:', employeeResponse);
    let html = '';
    for (const empleado of employeeResponse) {
      html += `
        <tr>
        <th scope = "row">${empleado.id} </th>
        <td>${empleado.name}</td>
        <td>${empleado.email}</td>
        </tr>`;
    }
    $employeesTbody.innerHTML = html;
  } catch (error) {
    console.log('Error: ', error);
  }
}
function buttonLoadClick() {
  console.log('Button clicked');
}
getEmployees();
