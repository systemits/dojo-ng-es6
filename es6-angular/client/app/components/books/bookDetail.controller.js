class BookDetailController {
    constructor(booksService, $stateParams) {
        "ngInject";

        this.name = 'Book Detail';

        // Get one book by ID

        booksService
            .getBook($stateParams.id)
            .then((response) => {
                this.book = response.data;
            });
    }
}

export default BookDetailController;
