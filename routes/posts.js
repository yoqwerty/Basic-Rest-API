const express = require('express');
const Post = require('../models/Post');

// Express router is a class which helps us to create router handlers.
const router = express.Router();

//get back all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json({message: err});
    }
});

//submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
 
    try {
        const savedPost  = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

//get specific post
router.get('/:postId', async(req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

//delete post
router.delete('/:postId', async (req, res) => {
    try {
        const removed = await Post.remove({_id: req.params.postId});
        res.json(removed);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

//update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updated = await Post.updateOne({_id: req.params.postId}, {
            $set: {
                title: req.body.title
            }
        });
        res.json(updated);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

module.exports = router;