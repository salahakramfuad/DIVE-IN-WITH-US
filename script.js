// Show the welcome alert on page load
window.onload = function () {
  showWelcomeAlert()
}

// Function to display the welcome alert
function showWelcomeAlert() {
  document.getElementById('customAlert').style.display = 'block'
  document.getElementById('overlay').style.display = 'block'
}

// Close the welcome alert
function closeAlert() {
  document.getElementById('customAlert').style.display = 'none'
  document.getElementById('overlay').style.display = 'none'
  showEmailPopup() // Now show the email popup after the alert is closed
}

// Show email subscription popup
function showEmailPopup() {
  setTimeout(() => {
    document.getElementById('emailPopup').style.bottom = '0'
    document.getElementById('overlay').style.display = 'block' // Keep overlay active for email popup
  }, 500)
}

// Close the email popup
function closePopup() {
  document.getElementById('emailPopup').style.bottom = '-100%'
  document.getElementById('overlay').style.display = 'none' // Hide overlay after closing email popup
}

// Submit email
function submitEmail() {
  const email = document.getElementById('userEmail').value
  if (email) {
    // Show custom notification
    displayNotification('Thank you for subscribing')

    // Automatically close notification after 1 second
    setTimeout(hideNotification, 1000)

    closePopup()
  } else {
    displayNotification('Please enter a valid email address!')
    setTimeout(hideNotification, 1000)
  }
}

// Function to display the custom notification
function displayNotification(message) {
  document.getElementById('notificationText').textContent = message
  document.getElementById('notificationPopup').style.display = 'block' // Show the popup
}

// Function to hide the custom notification
function hideNotification() {
  document.getElementById('notificationPopup').style.display = 'none' // Hide the popup
}
