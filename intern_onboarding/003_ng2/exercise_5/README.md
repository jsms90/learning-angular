# Angular 2 - Exercise 5 - Component Events

Duration: 20 minutes



## Output with Events

If we want to send data back up out of an html element, we use an event:

    <a onclick="handleClick">

In Angular 2 we can have our components emit custom events.


    // First we import Output
    import { Component, Output, EventEmitter } from '@angular/core';

    @Component({
      selector: 'cat',
      templateUrl: './cat.component.html',
      styleUrls: ['./cat.component.scss'],
    })
    export class CatComponent implements OnInit {

      // Now we declare the output using a decorator
      @Output() miow:EventEmitter<any> = new EventEmitter;

    }

We could wire this to a button in our `cat.component.html` like so:

    <button (click)="miow.emit()">

Now we can listen to this event:

    <cat (miow)="miowCount += 1"></cat>
    <p>
        miowCount: {{miowCount}}
    </p>



## Outputting data

If we want to output custom data, we can pass that data to the emit function:

    <button (click)="miow.emit(cat)">

    <cat (miow)="lastCatToMiow=$event"></cat>
    <p>
        Last cat was: {{lastCatToMiow.name}}
    </p>



## Challenge

Create the miow counter above.



## Extra hard challenge

Create a CatForm component. When you fill it in and submit it, it emits a new cat object.

Add this new cat object to the list of cats. Output this list in another component.



## Further Reading

Front End Design Principles - https://paper.dropbox.com/doc/Front-End-Design-Principles-TKTeoFJq9qbqdc6wBPNaq

## Notes to Instructor
