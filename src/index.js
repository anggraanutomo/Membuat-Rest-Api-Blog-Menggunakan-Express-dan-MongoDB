require('./models/Blogpost');
const express = require('express');
const mongoose = require('mongoose');
const blogpostRoutes = require('./routes/blogRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(blogpostRoutes);

const mongoUri = 'mongodb://localhost:27017/bdd-27';
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});