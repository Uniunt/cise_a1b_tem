const express = require('express');
const connectDB = require('/Users/phamtrang/Downloads/tutorial3/config/db.js');
const Books = require('/Users/phamtrang/Downloads/tutorial3/models/Book.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// create application/json parser
const jsonParser = bodyParser.json();
app.use(jsonParser);
// cross origin resource sharing
app.use(cors({origin: true, credentials: true}));
// Connect Database
connectDB();

// add book to store
app.post('/addBook', (req, res) => {
    console.log(req.body);
    Books.create(req.body)
        .then(book => res.json({msg: 'Books added successfully'}))
        .catch(err => res.status(400).json({error: 'Unable to add this book'}));
});

//get all books from store
app.get('/all-books', (req, res) => {
    Books.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({error: 'No Books found'}));
});

//get book by ID
app.get('/:id', (req, res) => {
    Books.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobookfound: 'No Books found'}));
});

// find and update book by ID
app.put('/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg: 'Updated successfully'}))
        .catch(err =>
            res.status(400).json({error: 'Unable to update the Database'})
        );
});

//find all books by keyword
app.get('/search/:keyword', (req, res) => {
    Books.find({
        $or: [
            {
                title:
                    {$regex: new RegExp("^" + req.params.keyword.toLowerCase(), "i")}
            },
            {
                author:
                    {$regex: new RegExp("^" + req.params.keyword.toLowerCase(), "i")}
            }
        ]
    })
        .then(books => res.json(books))
        .catch(err => res.json(err));
});

//delete book by ID
app.delete('/delete/:id', (req, res) => {
    Books.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({mgs: 'Books entry deleted successfully'}))
        .catch(err => res.status(404).json({error: 'No such a book'}));
});

//listening on port
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));