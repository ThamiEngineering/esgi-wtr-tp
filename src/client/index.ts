import "./longPollingClient";
import "./pollingClient";
import "./sseClient";

const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('message') as HTMLInputElement;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const newMessage = input?.value;

    if (!newMessage || newMessage.trim() === '') {
        alert('Veuillez entrer un message');
        return;
    }

    try {
        const response = await fetch('http://localhost:4000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: newMessage })
        });

        if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi du message');
        }

        input.value = '';
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'envoi du message');
    }
});
