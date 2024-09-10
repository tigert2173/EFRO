// Maintenance mode toggle (set to 'true' for maintenance mode)
var maintenanceMode = true; // Change this to true to enable maintenance mode

// Function to fetch or set the maintenance message
function getMaintenanceMessage() {
    // Example: fetch message from a server or configuration file
    // For simplicity, we're setting a static message here
    return "rrWe'll be back soon better than ever with a character sharing page :D";
}

// Function to handle maintenance mode
function checkMaintenanceMode() {
    if (maintenanceMode) {
        // Show overlay and maintenance message
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('maintenanceMessage').style.display = 'block';
        document.getElementById('content').style.display = 'none';

        // Update maintenance message and sub-message
        var maintenanceMessage = getMaintenanceMessage();
        document.getElementById('subMessage').textContent = maintenanceMessage;
    } else {
        // Hide overlay and maintenance message
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
window.onload = getMaintenanceMessage();
