const express = require('express');

const app = express();

app.use(express.json());

const books = [
	{ title: 'Java Programming', id: 1 },
	{ title: 'C# Programming', id: 2 },
	{ title: 'Java Programming', id: 1 }
];

// Creating GET request
// First service we are going to call
app.get('/', (req, resp) => {
	resp.send('Welcome to Study Automation to learn REST API with NodeJS');
});

app.get('/api/books', (req, resp) => {
	resp.send(books);
});

app.listen(8080);
