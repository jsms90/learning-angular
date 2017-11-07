# Angular 2 - Exercise 3 - HTML plus

Duration: 20 minutes

## Angular's templating language is rich and deep.

When you write an Angular template, you are not writing HTML at all. Instead you are writing instructions to the Angular compiler that will be turned into functions, that will ultimately output DOM nodes that will be put onto the page.

In the template we get direct access to the real DOM. That's right, the template lets you do DOM scripting.

## Settng Attributes

You can set any [attribute] on any element on the page. For example the disabled attribute.

    <button [disabled]="true">

You can set the value in a form:

    <input [value]="'cats'">

Any attrubute can be set, even the exotic ones. Right click an element, then inspect it to find its attributes. See all that craziness in there? You can have all of that craziness. It's all for you. All of it.

## Listening to events

We can also handle (events) using (round braces).

    <div (click)="catStatus='cool'">Cats are {{catStatus}}</div>

## Showing elements

We can conditionally hide elements using *ngIf

    <div *ngIf="catStatus=='cool'">Cats are cool</div>

See that star? Yes, it's weird. Deal with it.


## Challenge

Given what you now know, it should be possible for you to create a simple tabbed pane.

* Make yourself a row of buttons. When you click them, it sets the value of tab.
* Now make some tab content in divs. Conditionally show or hide those divs


## Challenge 2

You might also make a counter. When you click a button, increment a counter value. Make sure you output {{counter}} somewhere on the page.

You will need to initialise the value for the counter variable somewhere on the page.


## Notes to Instructor

To complelte this, the students will need to know how to create an attribute on the component.
