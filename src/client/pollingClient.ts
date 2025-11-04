const pollingContainer = document.getElementById('polling-messages') as HTMLUListElement;
const pollingTime = 5000;

let messages: string[] = [];

async function fetchPollingMessages() {
    try {
        const response = await fetch("http://localhost:4000/polling/messages");
        const newMessages = await response.json();

        const uniqueMessages = newMessages.filter((message: string) =>
            !messages.includes(message)
        );

        if (uniqueMessages.length > 0) {
            messages.push(...uniqueMessages);
            displayPollingMessages(uniqueMessages);
        }
    } catch (error) {
        console.error('Erreur polling:', error);
    }
}

function displayPollingMessages(newMessages: string[]) {
    newMessages.forEach(message => {
        const li = document.createElement('li');
        li.textContent = message;
        pollingContainer?.appendChild(li);
    });
}

fetchPollingMessages();
setInterval(fetchPollingMessages, pollingTime);
