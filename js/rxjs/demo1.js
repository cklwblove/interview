const Rx = require('rxjs/Rx')

const myObservable = Rx.observable.create((observer) => {
  observer.next('foo');
  setTimeout(() => observer.next('bar'), 1000);
})


myObservable.subscribe((text) => console.log(text))
