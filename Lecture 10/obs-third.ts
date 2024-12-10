import { of, combineLatest } from 'rxjs';

const obsOne = of('First');
const obsTwo = of('Second');

combineLatest([obsOne, obsTwo]).subscribe(([value1, value2]) => {
  console.log(`obs-third combined: ${value1}, ${value2}`);
});
