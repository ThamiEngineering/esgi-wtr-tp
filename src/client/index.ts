import "./pollingClient";
import "./longPollingClient"
import "./sseClient";


const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('message') as HTMLInputElement;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const newMessage = input?.value;

    // TODO - Envoyer le nouveau message au serveur via  POST http://localhost:4000/messages
    // TODO - Gérer les erreurs et les messages vides
    // TODO - Vider l'input après envoie

});