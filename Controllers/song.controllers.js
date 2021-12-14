import SongModel from "../Models/song.model.js";
const model = new SongModel();

class SongController{
    constructor(){
        console.log('Class song controller is loaded.');
    }

    list = async (req, res) => {
        console.log('Method songcontroller list is loaded.');
        const result = await model.list(req, res);
        res.json(result);
    }
    get = async (req, res) => {
        const result = await model.get(req, res);
        res.json(result);
    }
    create = async (req, res) => {
        const result = await model.create(req, res);
        res.json(result);
    }
    update = async (req, res) => {
        const result = await model.update(req, res);
        res.json(result);
    }
    search = async (req, res) => {
        const result = await model.search(req, res);
        res.json(result);
    }
}

export default SongController;