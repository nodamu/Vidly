const { Genre, validate } = require('../models/genre');


exports.getAllGenres = async function (req, res) {
    try {
        const genres = await Genre.find().sort('name');
        res.send(genres);
    } catch (error) {
        res.status(500).send('Could not fetch genres');
    }
}

exports.createNewGenre = async function (req, res) {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({ name: req.body.name });
    genre = await genre.save();

    res.send(genre);
}

exports.updateGenre = async function (req, res) {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
    });

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
}

exports.deleteGenre = async function (req, res) {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
}


exports.getGenreById = async function (req, res) {
    const genre = await Genre.findById(req.params.id);

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
}
