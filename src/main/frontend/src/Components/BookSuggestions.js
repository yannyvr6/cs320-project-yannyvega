import React, { useState, useEffect } from 'react';
import './BookSuggestions.css';

function BookSuggestions() {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestedBooks, setSuggestedBooks] = useState([]);

    const books = [
        {
            title: "The Great Gatsby",
            genre: "Fiction",
            coverImage: "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
            downloadUrl: "https://www.planetebook.com/free-ebooks/the-great-gatsby.epub",
        },
        {
            title: "A Brief History of Time",
            genre: "Science",
            coverImage: "https://m.media-amazon.com/images/I/91ebghaV-eL._AC_UF1000,1000_QL80_.jpg",
            downloadUrl: "https://drive.google.com/file/d/0B1PBdu03t91DYUdVc0c4Y2Vzb0k/view?resourcekey=0-evEIWkVG3IO0k73tz2dlSw",
        },
        {
            title: "The Hobbit",
            genre: "Fantasy",
            coverImage: "https://m.media-amazon.com/images/I/712cDO7d73L.jpg",
            downloadUrl: "https://isidore.co/CalibreLibrary/Tolkien,%20J.%20R.%20R_/The%20Hobbit%20(5022)/The%20Hobbit%20-%20Tolkien,%20J.%20R.%20R_.epub",
        },
        {
            title: "The Catcher in the Rye",
            genre: "Fiction",
            coverImage: "https://m.media-amazon.com/images/I/91fQEUwFMyL.jpg",
            downloadUrl: "https://epdf.pub/download/the-catcher-in-the-rye-5ea7ac8f68c9d.html",
        },
        {
            title: "Lightlark",
            genre: "Romance",
            coverImage: "https://m.media-amazon.com/images/I/61BGGE8BGZL._AC_UF1000,1000_QL80_.jpg",
            downloadUrl: "https://vk.com/doc329000261_673892100?hash=sUhOV2l9EXihm6Z5dAlBcBtyPqZ1KPzDYzIdKtbwl9H&api=1&no_preview=1",
        },
    ];

    const genres = ["Fiction", "Science", "Fantasy", "Romance"];

    useEffect(() => {
        if (!selectedGenre && !searchTerm) {
            setSuggestedBooks(books);
        }
    }, [selectedGenre, searchTerm]);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
        filterBooks(e.target.value, searchTerm);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        filterBooks(selectedGenre, e.target.value);
    };

    const filterBooks = (genre, term) => {
        const filteredBooks = books.filter(book =>
            (genre ? book.genre === genre : true) &&
            book.title.toLowerCase().includes(term.toLowerCase())
        );
        setSuggestedBooks(filteredBooks);
    };

    return (
        <div className="book-container">
            <h2>Book Suggestions</h2>
            <div className="filters">
                <select onChange={handleGenreChange} value={selectedGenre}>
                    <option value="">Select Genre</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>{genre}</option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="book-grid">
                {suggestedBooks.length > 0 ? suggestedBooks.map((book, index) => (
                    <div key={index} className="book-card">
                        <img src={book.coverImage} alt={book.title} className="book-cover" />
                        <a href={book.downloadUrl} target="_blank" rel="noopener noreferrer" className="book-title">
                            {book.title}
                        </a>
                    </div>
                )) : <p>No books found.</p>}
            </div>
        </div>
    );
}

export default BookSuggestions;
