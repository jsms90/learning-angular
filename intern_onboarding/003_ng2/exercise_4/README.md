# Angular 2 - Exercise 4 - Putting Components Inside One Another

Duration: 20 minutes

## Input with Properties

If we want to pass data into a hyperlink, we use an attribute.

    <a href="http://toast.com">

In Angular, we can do the same, but we have another option too, by setting a property directly on the component.

Here we are with an attribute:

    <cat name="Morris">

Note that attributes are always strings, because html is a text based medium.

Here's the same, but with a property:

    <cat [name]="'Morris'">

Note the quotes in quotes. That's because this time, Morris is an expression. It can be evaluated. This means that **[Properties] do not have to be strings!**

    <cat [age]="42 * 12.6">

    <cat [data]="{name:'Mog'}">

    <histogram [data]="mydata">

## We cant just set any old properties

Angular 2 is strict. We can't just go setting any properties we feel like. We have to declare them, using the component decorator.

In the component TypeScript file, `cat.component.ts` do something like this:

    // First we import Input
    import { Component, Input } from '@angular/core';

    @Component({
      selector: 'cat',
      templateUrl: './cat.component.html',
      styleUrls: ['./cat.component.scss'],
    })
    export class CatComponent implements OnInit {

      // Now we declare the attribute using a decorator
      @Input() name:string = "";

      // Maybe the cat receives some data
      @Input() data:any = {}

    }

## Using the property

Now we have the property, we can render it in any way we like. In the `cat.component.html`:

    <p>{{name}}</p>

    <pre>{{data | json}}</pre>

    <div *ngIf="data.age">Cat Age: {{data.age}}</div>


## Challenge

Here is a cat:

    cat1:any = {
      name: "Pork Chop",
      age: 12,
      attackPower: 3,
      armour: 0,
      magic: 16
    }

Create a component that will render this cat in some happy way.

## Challenge Extension

We can iterate over an array in a template like this:

    <div *ngFor="cat of cats">
      {{cat.name}}
    </div>

In your `application.component.ts`, create an array of cats:

    cats:Array<any> = [
      cat1,
      cat2,
      cat3
    ]

Now use ngFor and the `<cat>` component to output all the cats in the array.

## Ultra Mechagodzilla Extension

Create a function that can sort the cat array. Make a button with a (click)="sortByName()" property. When you click it, your cats are sorted.




## Notes to Instructor

* Be sure to explain the differences between attributes and properties. Properties are set directly on the DOM node. Attributes go by way of the HTML parser, and so will become strings.
