const express = require('express');
const axios = require('axios');
const genl_routes = express.Router();

// Base URL for the book API
const API_BASE_URL = 'http://localhost:5000';

// Task 10: Get all books
genl_routes.get('/books', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving books.' });
    }
});

// Task 11: Get book details by ISBN
genl_routes.get('/books/:isbn', async (req, res) => {
    const { isbn } = req.params;
    try {
        const response = await axios.get(`${API_BASE_URL}/books/${isbn}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: `Error retrieving book with ISBN ${isbn}.` });
    }
});

// Task 12: Get books by Author
genl_routes.get('/books/author/:author', async (req, res) => {
    const { author } = req.params;
    try {
        const response = await axios.get(`${API_BASE_URL}/books/author/${author}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: `Error retrieving books by author ${author}.` });
    }
});

// Task 13: Get books by Title
genl_routes.get('/books/title/:title', async (req, res) => {
    const { title } = req.params;
    try {
        const response = await axios.get(`${API_BASE_URL}/books/title/${title}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: `Error retrieving books with title ${title}.` });
    }
});

module.exports.general = genl_routes;
