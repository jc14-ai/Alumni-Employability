import app from "./src/app";

const PORT = process.env.EXPRESS_SERVER_PORT || 8000;

app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
});