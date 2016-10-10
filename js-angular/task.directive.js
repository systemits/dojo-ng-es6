(function(){
    angular.module('app')
        .directive('taskItem', taskItem);

    function taskItem() {
        var directive = {
            templateUrl: 'task.html',
            scope: {
                task: '='
            },
            restrict: 'E',
            controller: taskItemController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        taskItemController.$inject = ['appService'];
        /*@ngInject*/
        function taskItemController(appService) {
            var vm = this;

            console.log(vm.task);

            angular.extend(vm, {
                deleteTask: deleteTask
            });

            activate();

            function activate() {

            }

            function deleteTask(index) {
                appService.deleteTask(index);
            }

        }
    }
})();
