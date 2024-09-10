// Maintenance mode toggle (set to 'true' for maintenance mode)
var maintenanceMode = true; // Change this to true to enable maintenance mode

// Sub-message to display
var subMessageText = "We will be back shortly. Thank you for your patience."; // Change this text as needed

// Function to handle maintenance mode
function checkMaintenanceMode() {
    if (maintenanceMode) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('maintenanceMessage').style.display = 'block';
        document.getElementById('content').style.display = 'none';

        // Set the sub-message text
        document.getElementById('subMessage').textContent = subMessageText;
    } else {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('maintenanceMessage').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
}

// Function to proceed (if needed)
function proceed() {
    // Handle what happens when 'Proceed' is clicked
    closeMaintenance(); // For demonstration, we use closeMaintenance to hide the overlay
}

// Function to close maintenance message
function closeMaintenance() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('maintenanceMessage').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

// Check maintenance mode on page load
window.onload = checkMaintenanceMode;
