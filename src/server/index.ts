import express from "express";

import cors from "cors";
import {addMessage} from "./messagesStore";

const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors());


// TODO - Appeler les fonction polling, long polling et SSE ICI



//


// POST Message - Utiliser pour le Polling, Long-Polling et SSE
app.post('/messages', (req, res) => {
    const newMessage = req.body?.message as string;
    if (!newMessage) res.status(400).json({error: "Aucunn nouveau message"});
    // TODO - Ajouter ici du code pour le long Polling et le SSE


    //
    addMessage(newMessage);
    res.json({
        ok: true,
        message: newMessage
    });

});


app.listen(PORT, () => {
    console.log(`🚀 Serveur dispo sur http://localhost:${PORT}`);
});

