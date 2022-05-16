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
    id = notes.length+1;
    notes.push({
        id: id,
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

// delete note
router.delete('/notes/:id', (req, res) => {
    notes.some((note_elements, index) => {
        if (note_elements.id == req.params.id) {
          notes.splice(index, 1);
          fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), err => {
            if (err) {
              console.log(err);
            } else {
              res.json(note_elements);
            }
          });
          return true;
        }
      });
    });
    

module.exports = router;
