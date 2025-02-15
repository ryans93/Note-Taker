const fs = require('fs');

const readDb = () => {
    try {
        let db = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        return db;
    }
    catch (err) {
        return console.log(err);
    }
};

const writeDb = (db) => {
    try {
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        return db
    }
    catch (err) {
        return console.log(err);
    }
}

module.exports = { readDb, writeDb };