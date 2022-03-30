const Blog = require('../models/blog');


const blog_Index = (req, res) => {

    Blog.find().sort({ createdAt: -1 })
        .then((result) => {

            res.render('index', { title: "", blogs: result });

        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_Details = (req, res) => {

    const id = req.params.id;

    Blog.findById(id)
        .then((result) => {

            res.render('details', { blog: result, title: "" });
        })
        .catch((err) => {
            res.status(404).render('404',{ title: ""})
        })
}


const blog_Create_get = (req, res) => {
    res.render('create', { title: "" });
}

const blog_Create_post = (req, res) => {

    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {

        });
}

const blog_Delete = (req, res) => {

    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {

            res.json({ redirect: '/blogs' });
        })
        .catch((err) => {

        })
}


module.exports = {
    blog_Index,
    blog_Details,
    blog_Create_get,
    blog_Create_post,
    blog_Delete
}