import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
    selector: 'bases-counter',
    standalone: false,
    template: `
    <h3>Counter: {{counter}}</h3>
    <h3>CounterSignal: {{ counterSignal() }}</h3>

    <button (click)="increaseBy(1)" > + 1 </button>
    <button (click)="defaultCounter()" > Reset </button>
    <button (click)="increaseBy(-1)"> - 1 </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterComponent implements OnInit {

    public counter : number = 10;
    public counterSignal = signal(10);

    constructor() {
      setInterval(() => {
        this.counter += 10;
        this.increaseBy(1);
      }, 2000);
     }

    ngOnInit() { }

    increaseBy( value: number) : void {
        this.counter += value;
        this.counterSignal.update((current) => {
          current += value;
          return current; });
    }
    defaultCounter () {
      this.counter = 0;
      this.counterSignal.set(0);
    }
}
