document.getElementById('test-btn').addEventListener('click', async () => {
    
    const displayElement = document.getElementById('response-msg');
    displayElement.classList.remove('hidden'); // Reveal the box
    displayElement.innerText = "Connecting to server...";
    displayElement.style.color = "#94a3b8"; // Gray loading text

    try {
        const response = await fetch('/api/index'); 
        const data = await response.json();
        
        displayElement.innerText = "Success: " + data.message;
        displayElement.style.color = "#4ade80"; // Green success text
    } catch (error) {
        displayElement.innerText = "Error: Could not connect to backend.";
        displayElement.style.color = "#f87171"; // Red error text
    }
});