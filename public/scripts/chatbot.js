document.addEventListener('DOMContentLoaded', (event) => {
    const chatBubble = document.getElementById('chat-bubble');
    const chatContainer = document.getElementById('chat-container');
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const fileIcon = document.getElementById('file-icon');

    chatBubble.addEventListener('click', () => {
        chatContainer.classList.toggle('visible');
    });

    const appendMessage = (sender, text) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (sender === 'bot') {
            messageElement.classList.add('bot');
            messageElement.innerHTML = `
                <div class="icon"></div>
                <div class="text">${text}</div>
            `;
        } else {
            messageElement.classList.add('user');
            messageElement.innerHTML = `
                <div class="icon"></div>
                <div class="text">${text}</div>
            `;
        }
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    const sendMessage = () => {
        const text = userInput.value.trim();
        if (text) {
            appendMessage('user', text);
            userInput.value = '';
            fetch('http://127.0.0.1:5001/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: text })
            })
            .then(response => response.json())
            .then(data => {
                appendMessage('bot', data.response);
            })
            .catch(error => {
                console.error('Error:', error);
                appendMessage('bot', 'Sorry, there was an error.');
            });
        }
    };

    sendBtn.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
