const connection = require('../data/db');

const postsData = require('../data/posts');

let alteredPostsData = postsData;

function index(req, res) {

    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.json(results);

    })

}

function show(req, res, next) {
    const id = req.params.id;

    const sql = `   SELECT posts.*, tags.* 
                    FROM posts 
                    JOIN post_tag ON posts.id = post_tag.post_id 
                    JOIN tags ON post_tag.tag_id = tags.id 
                    WHERE posts.id = ?`;

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        if (results.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const post = {
            id: results[0].id,
            title: results[0].title,
            content: results[0].content,
            image: results[0].image,
            tags: results.map(row => row.label)
        };

        res.json(post);
    })

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
    const id = req.params.id;
    const sql = 'DELETE FROM posts WHERE id = ?';

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete post' })
        res.sendStatus(204);
    })

}

module.exports = { index, show, store, update, destroy, modify }