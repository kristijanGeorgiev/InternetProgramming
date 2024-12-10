import { Observable } from 'rxjs';

const obsSecond = new Observable<number>((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    subscriber.next(count++);
    if (count > 3) {
      subscriber.complete();
      clearInterval(interval);
    }
  }, 1000);
});

obsSecond.subscribe({
  next: (value) => console.log(`obs-second: ${value}`),
  complete: () => console.log('obs-second completed'),
});
