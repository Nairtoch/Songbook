import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 4020;

app.get('/', (rec, res) => {
    res.send('Welcome to the front page.');
})

app.get('/about', (rec, res) => {
    res.send('About us');
})

app.get('/products', (rec, res) => {
    res.send('Products will be listed here.');
})

app.use((rec, res, next) => {
    res.status(404).send("Page not found.");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})