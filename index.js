import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { router as SongRouter } from './Routes/song.router.js';
import { router as ArtistRouter } from './Routes/artist.router.js';

// Calls environment vars
dotenv.config();

const port = process.env.PORT || 3030;

const app = new express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.use(SongRouter);
app.use(ArtistRouter);

app.listen(port, () => {
    console.log(`Server running on port https://localhost:${port}`);
})