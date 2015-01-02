'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EnigmaSchema = new Schema({
    name: String,
    author: String,
    description: String,
    imageUrl: String
});

mongoose.model('Enigma', EnigmaSchema);
