// interactions.js

// Handle question submission
document.getElementById('questionForm').addEventListener('submit', submitQuestion);

function submitQuestion(event) {
    event.preventDefault();
    const questionText = document.getElementById('questionText').value;
    // You can implement further actions, like storing the question in a database.
    alert(`Question submitted: ${questionText}`);
    document.getElementById('questionText').value = '';
}

// Chat functionality
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
document.getElementById('sendChat').addEventListener('click', sendMessage);

function sendMessage() {
    const message = chatInput.value;
    chatInput.value = '';
    appendMessage(message);
}

function appendMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
}

// Simulate chat between students
const students = ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5'];

students.forEach(student => {
    setInterval(() => {
        const randomMessage = `${student}: Hello, everyone!`;
        appendMessage(randomMessage);
    }, Math.floor(Math.random() * 5000) + 1000);
});