// Wait for the button to be clicked
document.getElementById('test-btn').addEventListener('click', async () => {
    
    const displayElement = document.getElementById('response-msg');
    displayElement.innerText = "Loading...";

    try {
        // This fetches data from your Node.js backend
        const response = await fetch('/api/index'); 
        const data = await response.json();
        
        // Display the message from the backend
        displayElement.innerText = "Success: " + data.message;
        displayElement.style.color = "green";
    } catch (error) {
        displayElement.innerText = "Error: Could not connect to backend.";
        displayElement.style.color = "red";
    }
});