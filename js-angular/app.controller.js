(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['appService'];

    /* @ngInject */
    function AppController(appService) {
        var vm = this;

        angular.extend(vm, {
            myVar: 'Leandro',
            thalesFunction: thalesFunction,
            time: appService.getTeam(),
            createTask: createTask,
            taskName: ''
        });

        activate();

        ////////////

        function activate() {
            console.log("Activate home index");
            console.log(appService.getTeam());
            vm.tasks = appService.getTasks();
        }

        function createTask(taskname) {
            appService.createTask(taskname);

            vm.taskName = ""
        }



        function thalesFunction() {
            console.log(vm.myVar);
        }
    }
})();
