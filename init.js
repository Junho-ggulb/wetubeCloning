import app from "./app"

const PORT = 4000;

const handleListening = () => console.log(`Listening on: htpp://localhost:${PORT}`);

app.listen(PORT, handleListening);