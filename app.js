const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const postArray = [
    {
        title: "Exploring Node.js Streams",
        content: "Streams are powerful for handling large amounts of data efficiently in Node.js...",
        image: "/images/ciambellone.jpeg",
        tags: ["nodejs", "backend", "javascript"]
    },
    {
        title: "10 Tips for Clean JavaScript Code",
        content: "Writing clean code makes your projects more maintainable and bug-free...",
        image: "/images/cracker_barbabietola.jpeg",
        tags: ["javascript", "best-practices", "tips"]
    },
    {
        title: "Understanding Express Middleware",
        content: "Middleware functions in Express let you handle requests, responses, and errors with flexibility...",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: ["express", "nodejs", "web"]
    },
    {
        title: "Getting Started with Async/Await",
        content: "Async/Await syntax simplifies working with promises and asynchronous code in JavaScript...",
        image: "/images/pasta_barbabietola.jpeg",
        tags: ["javascript", "async", "promises"]
    },
    {
        title: "Deploying Your Node App to HerokutOOOOOtt",
        content: "Learn how to deploy your Node.js application to Heroku quickly and easily...",
        image: "/images/torta_paesana.jpeg",
        tags: ["deployment", "nodejs", "heroku"]
    }

]

app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})

app.get('/bacheca', (req, res) => {
    res.json(postArray);
})

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})