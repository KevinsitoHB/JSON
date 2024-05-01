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
// getEmployees();

//PROMISES
function myPromise() {
  return new Promise((resolved, denied) => {
    setTimeout(() => {
      // resolved({
      //   name: 'Kevin',
      //   last: 'Hernandez',
      // }),
      denied({
        codigo: '0',
        message: 'Error',
      });
    }, 3000);
  });
}
const result = myPromise();
console.log(result);

// result
//   .then((data) => {
//     console.log(data);
//   })
//   .then(() => {
//     console.log('Otra cosa');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function functionAsync() {
  try {
    const result = await myPromise();
    console.log('Trying');
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Execute');
  }
}
functionAsync();
