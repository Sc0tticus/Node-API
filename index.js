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

app.get('/api/books/:id', (req, resp) => {
	const book = books.find(book => book.id === parseInt(req.params.id));
	if (!book) resp.status(404).send('books not found');
	resp.send(book);
});

// Creating POST requests
app.post('/api/books/addBook', (req, resp) => {
	const book = {
		id: books.length + 1,
		title: req.body.title
	};
	books.push(book);
	resp.send(book);
});

// Creating PUT request
app.put('/api/books/:id', (req, resp) => {
	const book = books.find(book => book.id === parseInt(req.params.id));
	if (!book) resp.status(404).send('books not found');

	book.title = req.body.title;

	resp.send(book);
});

app.listen(8080);
