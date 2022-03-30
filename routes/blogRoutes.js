const express = require('express');
const router = express.Router();
const blogController =require('../controllers/blogController');





router.get('/blogs',blogController.blog_Index);
router.post('/blogs',blogController.blog_Create_post);
router.get('/blogs/create',blogController.blog_Create_get);
router.get('/blogs/:id', blogController.blog_Details);
router.delete('/blogs/:id',blogController.blog_Delete);



module.exports=router;




// router.get('/single-blog',(req,res)=>{

//     Blog.findById('5fe9d37cb7d112238820fcfd')
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// });

// router.get('/all-blogs',(req,res)=>{

//     Blog.find() 
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// });

// router.get('/add-blog',(req,res)=>{
    
//     const blog=new Blog({
//         title:'New Blog 2',
//         snippet:"This is a New Blog",
//         body:"Excellent is a New Blog which is a very important blog"
//     });

//     blog.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// });