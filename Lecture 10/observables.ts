import { Observable } from "rxjs";
const numberObservable = new Observable<number>((subscriber) => {
    console.log("Observable starts emitting values...");
    let count = 0;
  
    const interval = setInterval(() => {
      count++;
      subscriber.next(count); // Emit the current count
      if (count === 5) {
        subscriber.complete(); // Complete the observable after emitting 5 values
      }
    }, 1000);
  
    // Cleanup logic when the subscription is unsubscribed or completed
    return () => {
      console.log("Cleaning up...");
      clearInterval(interval);
    };
  });
  
  // Subscribing to the Observable
  const subscription = numberObservable.subscribe({
    next(value) {
      console.log(`Received value: ${value}`);
    },
    error(err) {
      console.error(`Error occurred: ${err}`);
    },
    complete() {
      console.log("Observable completed!");
    },
  });
  
  // Unsubscribe after 7 seconds
  setTimeout(() => {
    console.log("Unsubscribing...");
    subscription.unsubscribe();
  }, 7000); 