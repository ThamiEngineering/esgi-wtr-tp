const sseContainer = document.getElementById('sse-messages') as HTMLUListElement;

const eventSource = new EventSource("http://localhost:4000/sse/messages");

eventSource.addEventListener("open", () => {
    console.log('Connexion SSE établie');
});

eventSource.addEventListener("error", (error) => {
    console.error("Erreur SSE:", error);
});

eventSource.addEventListener("newMessage", (event) => {
    const message = JSON.parse(event.data);
    displaySseMessage(message);
});

function displaySseMessage(message: string) {
    const li = document.createElement('li');
    li.textContent = message;
    sseContainer?.appendChild(li);
}
