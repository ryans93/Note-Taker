const router = require('express').Router();
const { readDb, writeDb } = require('../helpers/db');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    let db = readDb();
    res.json(db);
});

router.post('/', (req, res) => {
    console.log(req.body);
    req.body.id = uuidv4();
    let db = readDb();
    db.push(req.body);
    writeDb(db);
    res.status(200).send('Note added');
});

router.delete('/:id', (req, res) => {
    let db = readDb();
    db = db.filter(note => note.id !== req.params.id);
    writeDb(db);
    res.status(200).send('Note deleted');
});

module.exports = router;