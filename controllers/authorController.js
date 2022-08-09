const {Author, Book}  = require('../models/model')

const authorControlller = {
    addAuthor: async(req,res) => {
        try {
            console.log(req.body)
            const newAuthor = new Author(req.body)
            const saveAuthor = await newAuthor.save()
            console.log(saveAuthor);
            res.status(200).json(saveAuthor)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    // Get all authors
    ,getAllAuthors: async(req,res) => {
        try {
            const authors = await Author.find()
            res.status(200).json(authors)
        } catch (error) {
            
        }
    }

    // Get author by id
    ,getAuthorById: async(req,res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books")
            res.status(200).json(author)
        } catch (error) { 
            res.status(500).json(error)
        }
    }

    // Update author
    ,updateAuthor: async(req,res) => {
        try {
            const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
            await author.updateOne({$set:req.body})
            res.status(200).json("updateOne successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // Delete author
    ,deleteAuthor: async(req,res) => {
        try {
            await Book.updateMany(
                {authors: req.params.id},
                {authors: null}
            )
            const author = await Author.findById(req.params.id).remove()
            res.status(200).json("deleteOne successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = authorControlller; 