// 泛型
class User {
  name: string;
  age: number;
}

class Order {
  id: number;
  total: number;
  items: any[];
}

function getUsers(cb: (users: User[]) => void): void {
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

getUsers(function (users: User[]) {
  for (let i = 0; users.length; i++) {
    console.log(users[i].name);
  }
});

function getOrders(cb: (orders: Order[]) => void): void {
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

getOrders(function (orders: Order[]) {
  for (let i = 0; orders.length; i++) {
    console.log(orders[i].id);
  }
});

// 使用泛型进行封装
function getEntities<T>(url: string, cb: (list: T[]) => void): void {
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

getEntities<User>('api/users', function (users: User[]) {
  for (let i = 0; users.length; i++) {
    console.log(users[i].name);
  }
});

getEntities<Order>('api/orders', function (orders: Order[]) {
  for (let i = 0; orders.length; i++) {
    console.log(orders[i].id);
  }
});

