const express = require('express');

const app = express();

app.use(express.static('public'));

// routing
app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/about-us', (req, res) => {
    res.send('about us page');
});

app.listen(8080, () => {
    console.log(`Aplikasi sudah berjalan`);
});