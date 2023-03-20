const { application } = require('express');
const db = require('../db.js');

exports.getAllArtists = (req, res) =>  {
    const query = 'Select * from Artists'; 
    db.all(query, [], (err, rows) => { 
        if(err) { 
            res.status(500).json({ error: err.message });
            return;
        }
        res.setHeader('Content-Type', 'application/json')
        res.statur(200).json(rows);
    });
};

exports.getAllAlbums = (req, res) =>  {
    const query = 'Select * from Albums'; 
    db.all(query, [], (err, rows) => { 
        if(err) { 
            res.status(500).json({ error: err.message });
            return;
        }
        res.setHeader('Content-Type', 'application/json')
        res.statur(200).json(rows);
    });
};

exports.getArtistById = (req, res) => { 
    const query = 'Select * from Artists where id = ?'
    const id = req.params.id; 
    db.get(query, [id], (err,row) => { 
        if(err) { 
            res.status(500).json({error: err.message});
            return;
        } if (!row) { 
            res.status(404).json({error: 'Artist not found'});
            return;
        }
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(row);
    });
};

exports.createArtist = (req, res) => { 
    const query = 'insert into Artists (Name) values (?)'
    const { name } = req.body;
    db.run(query, [name], function (err) { 
        if(err) { 
            res.status(500).json({ error: err.message });
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ id: this.lastID });
    });
}

