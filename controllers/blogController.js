const postsData = require('../data/posts');

let alteredPostsData = postsData;

function index(req, res) {

    const oggettoPost = {
        postsCount: alteredPostsData.length,
        postsContent: alteredPostsData
    }

    res.json(oggettoPost);
}

function show(req, res) {
    const post = alteredPostsData.find(p => p.id == req.params.id);
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovato"
        })
    }
    console.log(alteredPostsData);
    res.json(post)
}

function store(req, res) {

    const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };
    console.log(alteredPostsData);
    alteredPostsData.push(newPost)
    res.send(alteredPostsData);
}

function update(req, res) {

    const postToUpdate = alteredPostsData.find(p => p.id == req.params.id)

    postToUpdate.title = req.body.title;
    postToUpdate.content = req.body.content;
    postToUpdate.image = req.body.image;
    postToUpdate.tags = req.body.tags;
    console.log(alteredPostsData);


    res.send(alteredPostsData);

}

function modify(req, res) {

    const postToModify = alteredPostsData.find(p => p.id == req.params.id)

    req.body.title ? postToModify.title = req.body.title : postToModify.title = postToModify.title;
    req.body.content ? postToModify.content = req.body.content : postToModify.content = postToModify.content;
    req.body.image ? postToModify.image = req.body.image : postToModify.image = postToModify.image;
    req.body.tags ? postToModify.tags = req.body.tags : postToModify.tags = postToModify.tags;

    console.log(alteredPostsData);

    res.send(alteredPostsData);
}

function destroy(req, res) {

    const post = alteredPostsData.find(p => p.id == req.params.id);
    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not found",
            message: "post non trovato"
        })
    }

    alteredPostsData = alteredPostsData.filter(p => p.id != req.params.id)
    res.status(204);
    console.log(alteredPostsData)

    res.json(alteredPostsData);
}

module.exports = { index, show, store, update, destroy, modify }