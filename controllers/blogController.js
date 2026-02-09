const postsData = require('../data/posts');

let alteredData = postsData;

function index(req, res) {

    const oggettoPost = {
        postsCount: alteredData.length,
        postsContent: alteredData
    }
    res.json(oggettoPost);
}

function show(req, res) {
    const post = alteredData.find(p => p.id == req.params.id);
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovato"
        })
    }
    res.json(post)
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

    const post = alteredData.find(p => p.id == req.params.id);
    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not found",
            message: "post non trovato"
        })
    }
    res.status(204);

    console.log(alteredData)

    alteredData = alteredData.filter(p => p.id != req.params.id)
    res.json(alteredData);
}

module.exports = { index, show, store, update, destroy, modify }