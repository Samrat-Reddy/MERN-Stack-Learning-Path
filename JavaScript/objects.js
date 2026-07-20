const Library = {
    books: [],

    addBook: function(title, author, totalPages, pagesRead) {
        const newBook = {
            title,
            author,
            totalPages,
            pagesRead
        };

        this.books.push(newBook);
        return newBook;
    },

    updateProgress: function(title, newPagesRead) {
        for (const book of this.books) {
            if (book.title === title) {
                book.pagesRead = Math.min(newPagesRead, book.totalPages);
                return book;
            }
        }

        return "Book not found";
    },

    getUnfinishedBooks: function() {
        return this.books.filter(function(book) {
            return book.pagesRead < book.totalPages;
        });
    },

    summarize: function() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
            return;
        }

        this.books.forEach(function(book) {
            const percentageRead = book.totalPages === 0
                ? 0
                : Math.round((book.pagesRead / book.totalPages) * 100);
            const status = book.pagesRead >= book.totalPages ? "Completed" : "In Progress";

            console.log(`${book.title} by ${book.author} - ${status} (${percentageRead}%)`);
        });
    }
};

library.addBook("The Hobbit", "J.R.R. Tolkien", 310, 310);
library.addBook("Dune", "Frank Herbert", 600, 200);
library.addBook("Atomic Habits", "James Clear", 320, 80);

console.log("--- Initial Summary ---");
library.summarize(); 

console.log("\n--- Updating Progress ---");
library.updateProgress("Dune", 450);

console.log("\n--- Unfinished Books ---");
console.log(library.getUnfinishedBooks());