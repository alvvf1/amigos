var app = angular.module('avredsocial');

app.directive('buttonSendMessage', function () {
    return {
        restrict: 'E',
        scope: {
            profile: '='
        },
        template: '<a href="#/messages/{{profile.id}}" role="button" class="btn btn-secondary btn-sm"><span class="glyphicon glyphicon-envelope"></span> Enviar mensaje</a>',
        replace: true
    };
});

app.directive('buttonRemoveFriend', function () {
    return {
        restrict: 'E',
        scope: {
            account: '=',
            profile: '=',
            remove: '&'
        },
        template: '<a role="button" class="btn btn-secondary btn-sm" ng-show="account.hasFriend(profile.id)" ' +
        'ng-class="profile === account ? \'link-disabled\' : \'\'" ng-click="remove()">' +
        '<span class="glyphicon glyphicon-minus-sign" title=""></span> Eliminar amigo</a>',
        replace: true
    };
});

app.directive('buttonAddFriend', function () {
    return {
        restrict: 'E',
        scope: {
            account: '=',
            profile: '=',
            add: '&'
        },
        template: '<a role="button" class="btn btn-secondary btn-sm" ng-show="!account.hasFriend(profile.id)" ' +
        'ng-class="profile === account ? \'link-disabled\' : \'\'" ng-click="add()">' +
        '<span class="glyphicon glyphicon-minus-sign" title=""></span> Añadir amigo</a>',
        replace: true
    };
});