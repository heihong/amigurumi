const Pattern = require('../models/Pattern');
const fs = require('fs');

exports.getAllPattern = (req, res, next) => {
    Pattern.find()
        .then(patterns => {
            const result = patterns.map(pattern =>{
              return{  
                id:pattern._id,
                title: pattern.title,
                description: pattern.description 
             }
            });
        res.status(200).json(result)})
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

exports.getOnePattern = (req, res, next) => {
    Pattern.findOne({
      _id: req.params.id
    }).then(
      (pattern) => {
        const result = {
            id:pattern._id,
            title: pattern.title,
            description: pattern.description 
        }
        res.status(200).json(result);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };