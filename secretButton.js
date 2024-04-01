// Function to show the button
function showButton() 
{
    var button = document.getElementById('snakeButton');
    button.style.display = 'block'; // Show the button
}

// Function to hide the button
function hideButton() 
{
    var button = document.getElementById('snakeButton');
    button.style.display = 'none'; // Hide the button
}

// Function to handle the timer and periodically show the button
function handleTimer() 
{
    setInterval(function() 
    {
        showButton(); // Show the button
        setTimeout(hideButton, 3000); // Hide the button after 3 seconds
    }, 120000); // Repeat every 2 minutes (120000 milliseconds)
}

// Call the handleTimer function when the page loads
window.onload = function() 
{
    handleTimer();
};
