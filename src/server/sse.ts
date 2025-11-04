import type { Express, Response } from "express";

const sseClients: Response[] = [];
let eventId: number = 0;

export function setupSseRoutes(app: Express) {
    app.get("/sse/messages", (req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Connection": "keep-alive",
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*"
        });

        sseClients.push(res);

        req.on("close", () => {
            const index = sseClients.indexOf(res);
            if (index > -1) {
                sseClients.splice(index, 1);
            }
        });
    });
}

export function broadcastSSE(message: string) {
    sseClients.forEach((client) => {
        client.write(`event: newMessage\n`);
        client.write(`id: ${eventId}\n`);
        client.write(`data: ${JSON.stringify(message)}\n\n`);
    });
    eventId++;
}
