const consts = require('../Framework/consts');
const db = require('../db.js');
const { Genre, Collection } = require('../models');
const genreValidator = require('../validators/genreValidator');

module.exports = {
    async getAllGenres(req, res) {
        try {
            const genres = await Genre.findAll({
                include: [
                    {
                        model: Collection,
                        as: 'collections',
                    },
                ],
            });
            res.json(genres);
        } catch (error) {
            console.log(error);
            res.status(500).send('Error getting genres');
        }
    }
    ,
    async getGenreById(req, res) {
        try {
            const genre = await Genre.findByPk(req.params.id, {
                include: [
                    {
                        model: Collection,
                        as: 'collections',
                    },
                ],
            });
            if (!genre) {
                res.status(404).send('Genre not found');
            } else {
                res.json(genre);
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('Error getting genre');
        }
    }
    ,
    async createGenre(req, res) {
        try {
            const { error } = genreValidator.validate(req.body);
            if (error) {
                res.status(400).send(error.details[0].message);
            } else {
                const genre = await Genre.create(req.body);
                res.json(genre);
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('Error creating genre');
        }
    }
    ,
};  
