const express = require('express');
const booksRouter = express.Router();

function router(nav){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            Image: "tom.jpg"
        },
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantasy',
            Image: "harry.jpg"
        },
        {
            title: 'Paathumayude Aadu',
            author: 'Basheer',
            genre: 'Drama',
            Image: "basheer.jpg"
        }
    ];

    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Books',
            books
        });
    });

    booksRouter.get('/:id',function(req,res){
        res.render("book",
        {
            nav,
            title:'Book',
            book: books[req.params.id]
        });
    });

    return booksRouter;
}

module.exports = router;