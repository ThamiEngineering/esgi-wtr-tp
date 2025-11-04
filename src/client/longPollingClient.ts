const longPollingContainer = document.getElementById('long-polling-messages') as HTMLUListElement;

async function fetchLongPollingMessages() {
    try {
        const response = await fetch("http://localhost:4000/long-polling/messages");
        const newMessages = await response.json();

        displayLongPollingMessages(newMessages);
    } catch (error) {
        console.error('Erreur long polling:', error);
    } finally {
        fetchLongPollingMessages();
    }
}

function displayLongPollingMessages(newMessages: string[]) {
    newMessages.forEach((message: string) => {
        const li = document.createElement('li');
        li.textContent = message;
        longPollingContainer?.appendChild(li);
    });
}

fetchLongPollingMessages();
