import cors from "cors";
import express from "express";
import { notifyLongPollingRoutes, setupLongPollingRoutes } from "./longPolling";
import { addMessage } from "./messagesStore";
import { setupPollingRoutes } from "./polling";
import { broadcastSSE, setupSseRoutes } from "./sse";

const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors());

setupPollingRoutes(app);
setupLongPollingRoutes(app);
setupSseRoutes(app);

app.post('/messages', (req, res) => {
    const newMessage = req.body?.message as string;
    if (!newMessage) {
        res.status(400).json({error: "Aucun nouveau message"});
        return;
    }
    
    addMessage(newMessage);
    notifyLongPollingRoutes(newMessage);
    broadcastSSE(newMessage);
    
    res.json({
        ok: true,
        message: newMessage
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Serveur dispo sur http://localhost:${PORT}`);
});
