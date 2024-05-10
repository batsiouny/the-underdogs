// Function to register donor
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
    // Get form values (new fields for View Requested Donation Items)
    const donationItems = document.getElementById('donationItems').value;

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
    // Append new field for View Requested Donation Items
    formData.append('donationItems', donationItems);

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
    console.log("Requested Donation Items:", donationItems);

    // Show registration complete message
    showRegistrationCompleteMessage();
}

// Function to show registration complete message
function showRegistrationCompleteMessage() {
    const modal = document.getElementById('registrationCompleteModal');
    modal.innerHTML = "<div class='modal-content'>Registration complete</div>";
    modal.style.display = 'block';
}

// Function to show registration complete message
function showRegistrationCompleteMessage() {
    const modal = document.querySelector('.modal');
    modal.innerHTML = "<div class='modal-content'>Registration complete</div>";
    modal.style.display = 'block';
}


function showRequestedDonationItems() {
    const modal = document.getElementById('requestedDonationModal');
    modal.style.display = 'block';
    // Display requested donation items
    displayRequestedItems();
}
// Function to close requested donation modal
function closeRequestedDonationModal() {
    const modal = document.getElementById('requestedDonationModal');
    modal.style.display = 'none';
}

// Function to display requested donation items
function displayRequestedItems() {
    const requestedDonationList = document.getElementById('requestedDonationList');
    requestedDonationList.innerHTML = ''; // Clear previous items
    const items = [
        { name: "Food", quantity: 50 },
        { name: "Clothing", quantity: 100 },
        { name: "Medicines", quantity: 20 },
        { name: "School Supplies", quantity: 30 }
    ];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.quantity}`;
        requestedDonationList.appendChild(li);
    });
}

// Function to show registration complete message
function showRegistrationCompleteMessage() {
    const modal = document.getElementById('registrationCompleteModal');
    modal.style.display = 'block';
}
function displayRequestedItems() {
    const category = document.getElementById('category').value;
    const requestedDonationList = document.getElementById('requestedDonationList');
    requestedDonationList.innerHTML = ''; // Clear previous items
    const items = [
        { name: "Food", quantity: 50 },
        { name: "Clothing", quantity: 100 },
        { name: "Medicines", quantity: 20 },
        { name: "School Supplies", quantity: 30 }
    ];
    const filteredItems = items.filter(item => item.name.toLowerCase() === category.toLowerCase());
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.quantity}`;
        requestedDonationList.appendChild(li);
    });
}
// Function to show category selection dropdown
function showCategorySelection() {
    const dropdown = document.getElementById('categoryDropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Function to select a donation category
function selectCategory(category) {
    alert("Selected category: " + category); // You can perform any action here, like storing the selected category in a variable or sending it to the server
}


// Function to close modal
function closeModal() {
    const modal = document.getElementById('registrationCompleteModal');
    modal.style.display = 'none';
}