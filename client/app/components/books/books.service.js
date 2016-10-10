class BooksService {
    constructor($http) {
        "ngInject";
        this.$http = $http;
        this.baseUrl = 'http://localhost:8080/books/'
    }

    getBooks() {
        return this.$http.get(this.baseUrl);
    }

    getBook(id) {
        return this.$http.get(this.baseUrl + id);
    }
}

export default BooksService;
