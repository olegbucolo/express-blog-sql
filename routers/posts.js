const express = require('express');
const router = express.Router();

const postsData = require('../data/posts');

router.get('/', function (req, res) {

    const oggettoPost = {
        postsCount: postsData.length,
        postsContent: postsData
    }
    res.json(oggettoPost);
});

router.get('/:id', function (req, res) {
    res.send('READ the post that has id: ' + req.params.id);
})

router.post('/', function (req, res) {
    res.send('CREATE a new post: ');
});

router.put('/:id', function (req, res) {
    res.send('UPDATE completely the post that has id: ' + req.params.id);
});

router.patch('/:id', function (req, res) {
    res.send('UPDATE partially the post that has id: ' + req.params.id);
});

router.delete('/:id', function (req, res) {
    res.send('DELETE the post that has id: ' + req.params.id);
});

module.exports = router;