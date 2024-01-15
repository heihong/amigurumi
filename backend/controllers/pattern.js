const Pattern = require('../models/Pattern');
const fs = require('fs');

exports.getAllPattern = (req, res, next) => {
    Pattern.find()
        .then(patterns => res.status(200).json(patterns))
        .catch(error => res.status(400).json({ error }));
};

exports.createPattern = (req, res, next) => {
    
    const pattern = new Pattern({
        title: req.body.title,
        description: req.body.description,
    });
    pattern.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré' }))
        .catch(error => res.status(400).json({ error }));
};
