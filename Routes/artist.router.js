import express from "express";

const router = express.Router();

router.get('/api/artists', (rec, res) => {
    res.status(200).send('Artists');
});

export { router }