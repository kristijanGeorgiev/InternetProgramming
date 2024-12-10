import { Observable } from 'rxjs';

const obsFirst = new Observable<string>((subscriber) => {
  subscriber.next('Hello from obs-first!');
  subscriber.complete();
});

obsFirst.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('obs-first completed'),
});
