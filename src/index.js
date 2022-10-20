import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => {
    return res.send("할렐루야~~ ");
}

app.get("/", handleHome);
const handleListening = () => console.log(`✔️ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);  