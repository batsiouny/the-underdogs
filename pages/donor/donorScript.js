// Function to register donor
function registerDonor(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values (existing fields)
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const area = document.getElementById('area').value;
    const governorate = document.getElementById('governorate').value;
    const role = document.getElementById('role').value;
    const documentFile = document.getElementById('document').files[0]; // Get uploaded document file
    // Get form values (new fields)
    const subjects = document.getElementById('subjects').value;
    const proBonoClasses = document.getElementById('proBonoClasses').value;
    const proBonoStudents = document.getElementById('proBonoStudents').value;

    // Create FormData object to send form data
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('gender', gender);
    formData.append('email', email);
    formData.append('contactNumber', contactNumber);
    formData.append('password', password);
    formData.append('address', address);
    formData.append('area', area);
    formData.append('governorate', governorate);
    formData.append('role', role);
    formData.append('document', documentFile); // Append uploaded document file
    formData.append('subjects', subjects);
    formData.append('proBonoClasses', proBonoClasses);
    formData.append('proBonoStudents', proBonoStudents);

    // Optionally, you can send the form data to the server using AJAX or fetch
    // For now, let's just log the form data to the console
    console.log("Registration Form Data:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Gender:", gender);
    console.log("Email:", email);
    console.log("Contact Number:", contactNumber);
    console.log("Password:", password);
    console.log("Address:", address);
    console.log("Area:", area);
    console.log("Governorate:", governorate);
    console.log("Role:", role);
    console.log("Document File:", documentFile); // Log uploaded document file
    console.log("Subjects I can teach:", subjects);
    console.log("Pro-Bono Classes:", proBonoClasses);
    console.log("Pro-Bono Students:", proBonoStudents);
}

// Function to close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.style.display = 'none';
    }
}
