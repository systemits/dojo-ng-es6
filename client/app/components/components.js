import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Books from './books/books';

let componentModule = angular.module('app.components', [
    About,
    Books,
    Home
])

.name;

export default componentModule;
