// Maintenance mode toggle (set to 'true' for maintenance mode)
var isMaintenanceMode = true; // Change this to true to enable maintenance mode

// Function to handle maintenance mode
function checkMaintenanceMode() {
    if (isMaintenanceMode) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('maintenanceMessage').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    } else {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('maintenanceMessage').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
}

// Function to close maintenance message
function closeMaintenance() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('maintenanceMessage').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

// Check maintenance mode on page load
window.onload = checkMaintenanceMode;
