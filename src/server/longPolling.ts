import { EventEmitter } from "events";
import type { Express, Response } from "express";

let waitingNewMessages: Response[] = [];
const eventEmitter = new EventEmitter();

export function setupLongPollingRoutes(app: Express) {
    app.get("/long-polling/messages", (req, res) => {
        const listener = (message: string) => {
            res.json([message]);
            eventEmitter.off("newMessage", listener);
            
            const index = waitingNewMessages.indexOf(res);
            if (index > -1) {
                waitingNewMessages.splice(index, 1);
            }
        };

        eventEmitter.on("newMessage", listener);
        waitingNewMessages.push(res);

        req.on("close", () => {
            eventEmitter.off("newMessage", listener);
            const index = waitingNewMessages.indexOf(res);
            if (index > -1) {
                waitingNewMessages.splice(index, 1);
            }
        });
    });
}

export function notifyLongPollingRoutes(message: string) {
    eventEmitter.emit("newMessage", message);
}
