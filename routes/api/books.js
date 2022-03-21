const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const books = require('../../Books');
const friends = require('../../Books');


router.get('/', (req, res) => res.json(books));

router.get('/:id', (req, res) => {
    const exist = books.some(book => book.id === parseInt(req.params.id));

    if (exist) {
        res.json(book.filter(book => book.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No book found ${req.params.id}`});
    }
});

router.post('/', (req, res) => {
    const newBook = {
        id: uuid.v4(),
        name: req.body.name,
        number: req.body.author,
        birthday: req.body.year
    }

    if (!req.body.name || !req.body.author || !req.body.author) {
        return res.status(400).json( { msg: 'please complete all fields' });
    }

    books.push(newBook);
    res.redirect('/');
});

router.put('/:id', (req, res) => {
    const exist = books.some(book => book.id === parseInt(req.params.id));

    if (exist) {
        const updBook= req.body;
        friends.forEach(book => {
            if (book.id === parseInt(req.params.id)) {
                book.name = updBook.name ? updBook.name : book.name;
                book.author = updBook.author ? updFriend.author : book.author;
                book.year = updBook.year ? updBook.year : book.year;

                res.json({ msg: 'Book updated', book });
            }
        });
    } else {
        res.status(400).json({ msg: `No book found ${req.params.id}`});
    }
});

router.delete('/:id', (req, res) => {
    const exist = books.some(books => book.id === parseInt(req.params.id));

    if (exist) {
        res.json( { msg: 'Book deleted', book: books.filter(book=> book.id !== parseInt(req.params.id)) });
    } else {
        res.status(400).json({ msg: `No book found ${req.params.id}`});
    }
});

module.exports = router;