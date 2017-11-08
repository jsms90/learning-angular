# Angular 2 - Exercise 5 - Services

Duration: 20 minutes

Angular is component based. The job of a component is to manage a region of the DOM tree. It is not to do anything else. If we need to do other things (and we do) we use a service to keep the components thin.

In this section we will look at what Services are - what Dependency Injection is, and how it works now in Angular 2.

## DI is a pattern

Dependency injection is a pattern in which a components dependencies are passed in from the outside by the framework.

If a toaster needs bread, rather than having the toaster construct its own bread, the person requiring toast from the toaster inserts the bread. A more practical example might be an API accessor. We isolate the API code into a service object, then inject it into components where it is needed.

This isolates our components one from another, and allows us to substitute mock components for real ones for testing if necessary.

## Creating a service

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

## Challenge One - A Service

Implement the catService above, then render a list of cats using your CatComponent.

I would like the component to receive `cats:Cats` in the constructor, and then call `this.cats = cats.get()` to get the cats`

## Bonus Challenge

Add `addCat` and `removeCat` methods to the service. Now you can use the service to manage the cats. The component now only has to wire buttons to the service.


## Notes to Instructor

