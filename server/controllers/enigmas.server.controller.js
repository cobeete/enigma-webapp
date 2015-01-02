'use strict';

var Enigma = require('mongoose').model('Enigma');

exports.create = function(req, res, next) {
    var enigma = new Enigma(req.boty);
    enigma.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(enigma);
        }
    });
};

exports.list = function(req, res, next) {

    Enigma.find({}, function(err, enigmas) {
        if (err) {
            return next(err);
        } else {
            res.json(enigmas);
        }
    });
};
