const express = require('express');
const mongoose = require('mongoose');
const Blogpost = mongoose.model('Blogpost');

const router = express.Router();

router.post('/blogposts', async (req, res) => {
    try {
        const {title, content} = req.body;
        const blogpost = new Blogpost({title, content});
        await blogpost.save();
        res.send("create a post");
    } catch (err) {
        res.status(422).send(err.message); // user send invalid data
    }
});

router.get('/blogposts', async (req, res) => {
    const blogposts = await Blogpost.find();
    res.send(blogposts);
});

router.get('/blogposts/:id', async (req, res) => {
    const blogpost = await Blogpost.findOne({_id: req.params.id});
    res.send(blogpost);
});

router.put('/blogposts/:id', async (req, res) => {
    try {
        await Blogpost.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.send(await Blogpost.findOne({_id: req.params.id}));
    } catch ( err) {
        res.status(422).send(err.message);
    }
});

router.delete('/blogposts/:id', async (req, res) => {
    try {
        await Blogpost.findByIdAndRemove({_id: req.params.id});
        res.send("delete a post");
    } catch (err) {
        res.status(422).send(err.message);
    }
});

module.exports = router;