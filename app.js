const express = require('express');
const app = express();
const PORT = 3000;



// getting middleware 
const notFound = require('./middleware/notFound');
const errorsHandler = require('./middleware/errorsHandler');

app.use(express.static('public'));
app.use(express.json());

const postsRouter = require('./routers/posts');

app.use('/posts', postsRouter);

app.get('/', function (req, res) {
        res.send(`
    <div style="font-size: 2rem;">
      <h1>To use the API, see the following commands:</h1>
      <ul>
        <li>    <span style="color: green; font-size: 1rem;">GET</span>
                localhost:3000/posts 
                → Returns all posts</li>
        <li>    <span style="color: green; font-size: 1rem;">GET</span>
                localhost:3000/posts/
                <span style="color: green">:id</span>
                 → Returns one post</li>
        <li>    <span style="color: #03fcfc; font-size: 1rem;">POST</span>
                localhost:3000/posts 
                → Creates a post</li>
        <li>    <span style="color: #03c2fc; font-size: 1rem;">PUT</span>
                localhost:3000/posts/<span style="color: #03c2fc;">:id</span>
                → Updates a post</li>
        <li>    <span style="color: #0341fc; font-size: 1rem;">PATCH</span>
                localhost:3000/posts/<span style="color: #0341fc;">:id</span> 
                → Updates partially a post</li>
        <li>    <span style="color: red; font-size: 1rem;">DELETE</span> 
                localhost:3000/posts/<span style="color: red;">:id</span> 
                → Deletes a post</li>
      </ul>
    </div>
  `)

})

// using middleware
app.use(notFound);
app.use(errorsHandler);


app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
})