
function submitForm() {
    // Retrieve form data and display it in the "registrationData" div
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const gender = document.getElementById('gender').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const country = document.getElementById('country').value;
    const interests = document.getElementById('interests').value;
    const newsletter = document.getElementById('newsletter').checked;

    const registrationDataDiv = document.getElementById('registrationData');
    registrationDataDiv.innerHTML = `
      <div><h2>Registration Data</h2>
      <div><strong>Full Name</strong>: <p>${fullName}</p></div>
      <div><strong>Email</strong>: <p>${email}</p></div>
      <div><strong>Username</strong>: <p>${username}</p></div>
      <div><strong>Date of Birth</strong>: <p>${dateOfBirth}</p></div>
      <div><strong>Gender</strong>: <p>${gender}</p></div>
      <div><strong>Phone Number</strong>: <p>${phoneNumber}</p></div>
      <div><strong>Country</strong>: <p>${country}</p></div>
      <div><strong>Interests</strong>: <p>${interests}</p></div>
      <div><strong>Newsletter Subscription</strong>: <p>${newsletter ? 'Yes' : 'No'}</p></div>
    `;

    return false; // Prevent form submission to keep data displayed on the page
  }