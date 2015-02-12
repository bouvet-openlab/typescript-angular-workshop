# TypeScript & AngularJS
---
## Installation
### Visual Studio
```

If you have Visual Studio 2013 with Update 2,
you already have TS - yay! (If not, start that update from Tools -> Extensions and Updates or go to www.typescriptlang.org -> download -> TypeScript 1.4 for VS2013).

```
### IntelliJ / WebStorm
```
Some intellij stuff blabla
```
### SublimeText 2/3
```
Some ST stuff blabla
```
## TypeScript fundamentals
### Modules
* Modules can be compared to modules in F# or kind off like a static class in C#.
* A module is an encapsulated scope (not to be confused with an AngularJS scope) that has functions, but you don't new up instances like with a class. 
* A module can roughly be compared to a static class. 
* It has functions you call directly.
<br/><br/>
Let's say we want to do this (C#):
```
Car car = CarCompany.Car.Create();
```
In TypeScript, do this:
```
var car = CarCompany.Car.create();
```
Which generates this JavaScript:
```
var car = Car.create();
```
### Classes & constructors
*Class*
* A class in TypeScript is equivalent to a class in C# or Java.
* Create instances by using the "new" keyword.
* Call functions on a instance.
* Can have private and public members.
*Constructor*
* A constructor in TypeScript is equivalent to a constructor in C# or Java.
* Gets called upon instantiation of the class.
### Enums
### Interfaces & Inheritance
### Generics
### Lambdas
## AngularJS fundamentals
