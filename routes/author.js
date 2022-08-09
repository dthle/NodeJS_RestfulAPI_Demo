const authorControlller = require('../controllers/authorController')

const router = require('express').Router();

//Add Author

router.post('/', authorControlller.addAuthor)

//Get All Author
router.get('/', authorControlller.getAllAuthors)

//Get Author By ID
router.get('/:id', authorControlller.getAuthorById)

//Update Author
router.put('/:id', authorControlller.updateAuthor)

//Delete Author
router.delete('/:id', authorControlller.deleteAuthor)


module.exports = router