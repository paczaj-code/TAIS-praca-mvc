const Twig = require("twig"),
    express = require('express'),
    app = express();

// This section is optional and used to configure twig.
app.set("twig options", {
    allowAsync: true, // Allow asynchronous compiling
    strict_variables: false
});

app.get('/', async function (req, res) {
    const articles = fetch('http://localhost:3000/posts')
        .then(response => response).then(response => response.json());
    res.render('index.twig', {
        articles: articles
    });
});

app.get('/article/:id', async function (req, res) {
    const article = fetch('http://localhost:3000/posts/'+req.params.id)
        .then(response => response).then(response => response.json());
    res.render('article.twig', {
        article: article
    });

});

app.listen(8000);
