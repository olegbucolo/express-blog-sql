const postsData = require('../data/posts');

function index(req, res) {

    const oggettoPost = {
        postsCount: postsData.length,
        postsContent: postsData
    }
    res.json(oggettoPost);
}

function show(req, res) {
    res.send('READ the post that has id: ' + req.params.id);
}

function store(req, res) {
    res.send('CREATE a new post: ');
}

function update(req, res) {
    res.send('UPDATE completely the post that has id: ' + req.params.id);
}

function modify(req, res) {
    res.send('UPDATE partially the post that has id: ' + req.params.id);
}

function destroy(req, res) {
    res.send('DELETE the post that has id: ' + req.params.id);
}

module.exports = { index, show, store, update, destroy, modify }