const bookController = require('../controllers/bookController');

const router = require('express').Router();

//Add Book
router.post('/', bookController.addBook)

//Get all books
router.get('/', bookController.getAllBooks)

//Get Book by ID
router.get('/:id', bookController.getBookById)

//update book
router.put('/:id', bookController.updateBook)

//delete book
router.delete('/:id', bookController.deleteBook)

module.exports = router;
