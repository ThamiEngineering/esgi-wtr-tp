import {messages} from "./messagesStore";
import type { Express, Response } from "express";

let waitingNewMessages: Response[] = [];

export function setupLongPollingRoutes(app: Express) {
    // TODO Renvoyer la liste des NOUVEAUX messages via la route /long-polling/messages

    // TODO - Implémenter le long polling.
    // TODO - Garder la connexion ouverte tant qu'on n'a pas de nouveau message
    // TODO - Stocker la connexion dans : waitingNewMessages

}


// TODO - Implémenter cette fonction qui permettera de renvoyer la reponse au client dès la reception d'un message
// TODO - Appeler cette fonction là ou il faut lorsqu'un nouveau message arrive
export function notifyLongPollingRoutes(message: String) {

}