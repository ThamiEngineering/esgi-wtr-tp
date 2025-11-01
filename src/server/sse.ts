import type {Express, Response} from "express";


const sseClients: Response[] = [];

export function setupSseRoutes(app: Express) {
    // TODO Renvoyer la liste des NOUVEAUX messages via la route /sse/messages

    // TODO - Etablir une connexion SSE et la socker dans sseClients.
    // TODO - Gérer aussi la déconnexion

}


export function broadcastSSE(message: string) {
    // TODO - Envoyer un event SSE à toutes les instances connectés
    // TODO - Un event doit contenir un ID, un NOM et de la donnée
    // TODO - la donnée doit être le nouveau message recu
}