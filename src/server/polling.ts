import type { Express } from "express";
import { messages } from "./messagesStore";

export function setupPollingRoutes(app: Express) {
    app.get("/polling/messages", (req, res) => {
        res.json(messages);
    });
}