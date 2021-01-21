const express = require("express");

const nav = [
    { link: '/books', name: 'books' },
    { link: '/author', name: 'author' },
    { link: '/login', name: 'Login' },
    { link: '/signup', name: 'Sign up' },
    { link: '/admin', name: 'Add book' }

];


const booksRouter = express.Router();
const authorsRouter = express.Router();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("./public"));
//setting view engine as ejs
app.set("view engine","ejs");
//setting initial path
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);

app.get("/",function(req,res){
    res.render("index",{
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:"Library"
    });
});
//book
var books = [
    {
        title:"DaVinci Code",
        author:"Dan Brown",
        genre:"Mystery Thriller",
        img:"davinci.jpg"
    },
    {
        title:"Angels and Demons",
        author:"Dan Brown",
        genre:"Mystery Thriller",
        img:"angel.jpg"
    },
    {
        title:"The Alchemist",
        author:"Paulo Coelho",
        genre:"Drama Fantasy",
        img:"alchemist.jpg"
    },
    {
        title:"The Pilgrimage",
        author:"Paulo Coelho",
        genre:"Mystery Thriller",
        img:"pilgrimage.jpg"
    },
    {
        title:"The Great Gatsby",
        author:"F. Scott Fitzgerald",
        genre:"Tragedy Literary fiction",
        img:"gat.jpg"
    },
]
//authors
var authors =[
    {        
    title:"Dan Brown",
    books:"DaVinci Code,Angels and Demons",
    img:"dan.jpg"
    },
    {        
    title:"Paulo Coelho",
    books:"The Alchemist,The Pilgrimage",
    img:"paulo.png"
    },
    {        
    title:"F. Scott Fitzgerald",
    books:"The Great Gatsby",
    img:"gats.jpg"
    },
    
]

booksRouter.get("/",function(req,res){
    res.render("books",{
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:"Books",
        books
    });
});

booksRouter.get("/:i",function(req,res){
    req.params.i;
    res.render("book",{
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:"Book",
        book:books[i]
    })
});

authorsRouter.get("/",function(req,res){
    res.render("authors",{
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:"Authors",
        authors
    })
});

authorsRouter.get("/:j",function(req,res){
    req.params.j;
    res.render("author",{
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:"Author",
        author:authors[j]
    })
});

app.listen(port,()=>{console.log("Server Ready at" + port)});