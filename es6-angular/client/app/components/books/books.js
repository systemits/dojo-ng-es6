import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookListComponent from './bookList.component';
import bookDetailComponent from './bookDetail.component';
import booksService from './books.service';

let bookListModule = angular.module('bookList', [
    uiRouter
])

.config(($stateProvider) => {
    "ngInject";

    $stateProvider
        .state('bookList', {
            url: '/booklist',
            component: 'bookList'
        })
        .state('bookDetail', {
            url: '/bookdetail/:id',
            component: 'bookDetail'
        });
})

.service('booksService', booksService)
    .component('bookList', bookListComponent)
    .component('bookDetail', bookDetailComponent)

.name;

export default bookListModule;
