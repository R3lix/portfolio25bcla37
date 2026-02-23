// This function runs on the server when the frontend requests it
module.exports = (req, res) => {
    
    // You can add logic here (like sending emails or fetching data)
    
    // Send a JSON response back to the frontend
    res.status(200).json({
        message: "Hello from Node.js! Your backend is connected."
    });
};