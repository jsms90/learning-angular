# Angular 2 - Exercise 5 - Services

Duration: 20 minutes

In this section we will look at what Services are - what Dependency Injection is, and how it works now in Angular 2.

## DI is a pattern

Dependency injection is a pattern in which a components dependencies are passed in from the outside by the framework.

If a toaster needs bread, rather than constructing its own bread, the person requiring toast inserts the bread.

## Pretend Code

Let's invent some code. Here's a toaster:

```
var Toaster = function(bread) {
  this.toast = makeToastOutOf( bread )
};
```

And here's a pretend dependency injector that will take care of making a toaster and filling it with bread:

```
var magicalInjector = new MagicalInjector()
magicalInjector.knowsHowToMakeA( Toaster ).with( Bread )
var myToaster = magicalInjector.pleaseGiveMeA( Toaster );
```

Our pretend magicalInjector knows the toaster needs bread. It creates bread and uses it to initialise the toaster. The Bread may itself have an injector.

A more practical example might be an API accessor. We isolate the API code into an object, then inject it where it is needed.

This isolates our components one from another, and allows us to substitute mock components for real ones for testing.



A TypeScript service is just a plain old TypeScript class, which ultimately is a newable.

In Angular 2, and class or newable function can be a service.

```
@Injectable()
export class CatService {
  get() {
    return ['Manny', 'Francis', 'Terry Wogan'];
  }
}
```

The @injectable decorator at the top is a blank decorator. It's only purpose is to trick TypeScript into storing type data about the object. The presence of a decorator means that type info might be required, so Angular holds onto it using Reflect.Metadata.

## Make it available in your module

Tell your ngModule about the service using the providers attribute.

```
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, CatListComponent ],
  bootstrap: [ AppComponent ],
  providers: [ CatService ]
})
export class AppModule { }
```

## Import the service

We can then inject this into a component, simply by receiving it in the constructor like this:

```
import { Component } from '@angular/core';
import { CatService } from './cats';

@Component({
  selector: 'app',
  template:`
    {{cats | json}}
  `,
})
export class AppComponent {
  constructor(cats: CatService) {
    this.cats = cats.get();
  }
}
```

## Dependency Injection

Our Component receives a CatService, and yet we never manually made one. Angular has made one for us. We call this Dependency Injection.

Notice the class constructor. It receives a catService of type CatService. This is enough for Angular to know that it must make a CatService and pass it in.

This works because TypeScript saves type information in *metadata* when it compiles. In our tsconfig, we have enabled the `emitDecoratorMetadata` flag. Any object with a decorator saves its type, and its constructor signature in a global object called Relect.metadata. Angular uses this object to work out how to instantiate objects.

!=resources(exercise)

section.exercise
:markdown
## Simple Exercise - A Service

In your exercise folder you'll find an app that renders a list of cats using ng-for. The cats are currently hardcoded into the component.

To build this application:

1. First download the dependencies with `npm install`.
2. Can compile this application by typing: `webpack -w`.

Convert this to use a service instead, so that the list of cats comes from a service.

I would like the component to receive `cats:Cats` in the constructor, and then call `this.cats = cats.get()` to get the cats`

section.exercise
:markdown
## Escape the Dungeon Exercise - Let's actually make it winnable

We have an object called LocationModel that contains a single location. Let's expand this and create a location service that holds a collection of locations, and lets us navigate between them.

We might change our LocationModel to look like this:

```
export class LocationModel {
  name:string = ""
  description:string = ""
  items:Array<any> = []
  north:LocationModel
  south:LocationModel
  east:LocationModel
  west:LocationModel

  removeItem(item:any) {
    this.items.splice(this.items.indexOf(item), 1)
  }
  placeItem(item:any) {
    this.items.push(item)
  }
}
```



We might also Create a location service:

```
import {Injectable} from '@angular/core';

import {LocationModel} from './location.model'

var dungeon = new LocationModel()
var corridor = new LocationModel()
dungeon.north = corridor;

@Injectable()
export class LocationService {
  currentLocation:LocationModel = dungeon
  moveNorth() {
    if (this.currentLocation.north) {
      this.currentLocation = this.currentLocation.north
    }
  }
  ...
}
```

We would then have a location service which we could call to get the current location, and to move between locations.

Look in the exercise start point, you'll find an implemented location service. Use this as a start point to create an InventoryService that holds a list of ItemModels. Let the user store items and drop them.

## Extension

Crete a Monster Service with a `fight` method. Pass it a monster from the location and a weapon from the inventory and have it return an outcome.

## Challenge


## Notes to Instructor

