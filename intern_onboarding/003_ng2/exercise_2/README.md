# Angular 2 - Exercise 2 -

Duration: 20 minutes

## What are components?

Angular is component driven. It's all about the components.

A component is similar to a DOM node. You stick it on the page, and it does something. Imaging an Anchor tag:

    <a>Hello from the anchor</a>

You stick it on the page and it sits around being all hyperlinky. Word.

If we want to pass data into it, we use an attribute:

    <a href="http://lolcats.com">

If we want to get data out of it, we use an event:

    <a onclick="handleCatClick">

Angular 2 lets you **create your own new tags that have behaviour, styling, attributes and events that you will define.**

    <cat name="molly" age="42" on-miow="miows = miows - 1">

## Making a component with the cli

To make a component we ideally need four files:

1. HTML template
2. CSS template
3. The component definition, written in TypeScript
4. A test. Oh yes.

We can make all those by hand, if we had the time or inclination, but it's much easier to get a start using the ng-cli. At the command line, type:

    ng generate component cat

Check it out, you have a cat component.

## Putting your component on the page

To pop that bad boy on the page, open your app.component.html file, and type:

    <cat></cat>


## Challenge

* Create page header and footer components. Make them look pretty, and stick them in your app.


## Notes to Instructor

The goal here is to learn what a component is, and to learn about the ng-cli component generator.
