class BookListController {
    constructor(booksService) {
        "ngInject";
        this.name = 'bookList';

        booksService.getBooks()
        .then((response) => {
            this.books = response.data;
        });
    }
}

export default BookListController;
