import rental from '../models/rental-model.js';

export const store = async (req, res) => {
    try {
        const content = await rental.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
        const content = await rental.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const show = async (req, res) => {
    try {
        const content = await rental.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const showComplete = async (req, res) => {
    console.log(req.params.id);
    try {
        const content = await rental.findById(req.params.id).populate('movie_id').populate('user_id').exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const content = await rental.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const destroy = async (req, res) => {
    try {
        const content = await rental.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
