(function(){
    angular
        .module('app')
        .factory('appService', appService);

    function appService() {
        var service = {
            getTeam: getTeam,
            getTasks: getTasks,
            createTask: createTask,
            deleteTask: deleteTask
        };

        var tasks = [
                {
                    id: 0,
                    name: "task1",
                    done: true
                },
                {
                    id: 1,
                    name: "task2",
                    done: false
                }
            ];

        return service;

        function getTeam() {
            return [
            'Alexandre',
            'Bruna',
            'Leandro',
            'Outros',
            'Touré'
            ]
        }


        function getTasks() {
            return tasks
        }

        function createTask(taskName){
            tasks.push(
                {
                    name: taskName,
                    done: false,
                    id: tasks.length
                }
            )
        }

        function deleteTask(id){
            var deadTask = tasks.find(function(task){
                return task.id === id;
            });
            tasks.splice(deadTask.id, 1)
        }


    }
})();
