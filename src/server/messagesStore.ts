export const messages: string[] = [];
export function addMessage(message: string) {
    console.log(`Nouveau message "${message}" ajouté à la liste 🚀`);
    messages.push(message);
}