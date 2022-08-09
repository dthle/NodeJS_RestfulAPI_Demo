const {Book, Author} = require('../models/model.js')

const bookController = {
    addBook : async (req,res) => {
        try {
            const newBook = new Book(req.body)
            const savedBook = await newBook.save()
            if(req.body.author){
                const author = Author.findById(req.body.author)
                await author.updateOne({$push: {books: savedBook._id}})
            }
            res.status(200).json(savedBook)
        } catch (error) {
            res.status(500).json(error)
        }
    } 
    //Get All Book
    ,getAllBooks : async (req,res) => {
        try {
            const books = await Book.find({})
            res.status(200).json(books)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    //Get Book By ID
    ,getBookById : async (req,res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author")
            res.status(200).json(book)
        }catch (error) {
            res.status(500).json(error)
        }
    }

    //Update Book
    ,updateBook : async (req,res) => {
        try {
            const book = await Book.findById(req.params.id)
            await book.updateOne({$set: req.body})
            res.status(200).json(" updateOne " + book)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    //Delete Book
    ,deleteBook : async (req,res) => {
        try {
            await Author.updateMany(
                {books: req.params.id},
                {$pull: {books: req.params.id}}
            )
            const book = await Book.findById(req.params.id)
            await book.remove()
            res.status(200).json("Delete successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = bookController