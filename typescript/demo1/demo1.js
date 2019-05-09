// 泛型
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());
function getUsers(cb) {
    $.ajax({
        url: 'api/users',
        method: 'GET',
        success: function (data) {
            cb(data);
        },
        error: function (error) {
            cb(null);
        }
    });
}
getUsers(function (users) {
    for (var i = 0; users.length; i++) {
        console.log(users[i].name);
    }
});
function getOrders(cb) {
    $.ajax({
        url: 'api/orders',
        method: 'GET',
        success: function (data) {
            cb(data);
        },
        error: function (error) {
            cb(null);
        }
    });
}
getOrders(function (orders) {
    for (var i = 0; orders.length; i++) {
        console.log(orders[i].id);
    }
});
// 使用泛型进行封装
function getEntities(url, cb) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            cb(data);
        },
        error: function (error) {
            cb(null);
        }
    });
}
getEntities('api/users', function (users) {
    for (var i = 0; users.length; i++) {
        console.log(users[i].name);
    }
});
getEntities('api/orders', function (orders) {
    for (var i = 0; orders.length; i++) {
        console.log(orders[i].id);
    }
});
