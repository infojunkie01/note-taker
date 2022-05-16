const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');

// get notes 
router.get('/notes', (req, res) => {
    res.send(notes);
});

// add and save note
router.post('/notes', (req, res) => {
    notes.push({
        title: req.body.title,
        text: req.body.text,
    });
    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes),
        err => {
            if (err) {
                console.log(err);
            } else {
                res.json(notes);
            }
        }
    )
});

module.exports = router;
