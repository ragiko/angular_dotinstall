var MainCtrl = function ($scope) {
    $scope.users = [
        {name:'taguchi', score:52.22},
        {name:'tanaka', score:28.22},
        {name:'tanaka', score:28.22},
        {name:'tanaka', score:28.22},
        {name:'tanaka', score:28.22},
        {name:'tanaka', score:28.22},
        {name:'tanaka', score:28.22},
        {name:'yamada', score:11.11}]

    $scope.today = new Date();
}


var userItemCtrl = function ($scope) {
    $scope.increment = function () {
        $scope.user.score++;
    }

}
