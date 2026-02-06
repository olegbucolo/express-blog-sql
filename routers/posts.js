const express = require('express');
const router = express.Router();

const postsData = require('../data/posts');

router.get('/', function (req, res) {

    const oggettoPost = {
        postsCount: postsData.length,
        postsContent: postsData,
    }

    res.json(oggettoPost);
});

// router.post('/:id', function (req, res){
//     res.send('')
// })