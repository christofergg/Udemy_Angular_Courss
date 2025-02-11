import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bases-counter',
    standalone: false,
    template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(1)" > + 1 </button>
    <button (click)="defaultCounter()" > Reset </button>
    <button (click)="increaseBy(-1)"> - 1 </button>
    `
})

export class CounterComponent implements OnInit {
    
    public counter : number = 10;
    constructor() { }

    ngOnInit() { }
    
    increaseBy( value: number) : void {
        this.counter += value;
    }
    defaultCounter () {
      this.counter = 10;
    }
}