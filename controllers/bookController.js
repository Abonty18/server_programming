const books = require("./../models/books");
const bookModel = require("./../models/books");

const getBookList = async (req, res) => {
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    console.log(data);
    data.forEach((book) => {
      books.push({ name: book.name, author: book.author, genre: book.genre, id: book._id });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};
const delBook =async (req, res) => {
  let data=[];
  let books=[];
  try{
    data=await bookModel.deleteOne();
    console.log(data);
  }
  catch(error){
    console.log(error);
  }
  finally{
    res.redirect("/book-list");
  }


};

const getUpdateBook = async (req, res) => {
  try {
    const post = await bookModel.findById(req.params.id);
    console.log(req.params.id);
    res.render("updateBook", { book: post });
  } catch (err) {
    res.json({ message: err });
  }
}

  const updateBook = async (req, res) => {
    try {
      const post = await bookModel.findById(req.params.id);
      post.name = req.body.name;
      post.author = req.body.author;
      post.genre = req.body.genre;
      post.save();
      res.json(post);
    }
    catch (err) {
      res.json({ message: err });
    }
  };



  module.exports = { getBookList, getBook, postBook, delBook, updateBook,getUpdateBook };
