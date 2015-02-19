var log = (obj: any) => {
	console.log(obj);
}











// Primitives

var whatever: any;
var name: string;
var age: number;
var isAwesome: boolean;

// Implicit type inference

var whatever; 			// whatever is of 'any' type
var name = 'john';		// name is of 'string' type
var age = 18; 			// age is of 'number' type
var isAwesome = true; 	// isAwesome is of 'boolean' type

// Explicit type declaration

var name: string = 'john';
var age: number = 20;
var isAwesome: boolean = true;

// Arrays

var names: string[] = ['john', 'anne', 'jack'];

// Null - anything can be null

var name: string = null;
var age: number = null;
var isAwesome: boolean = null;
var person: {} = null;

// Object

var points: Object = { x: 10, y: 20 };
var square: {} = { x: 10, y: 20 };










// Function

var calc = function(w: number, h?: number) {
	// The '?' indicates an optional parameter

	if (h === undefined){
		return w * w;
	}	
	return w * h;
}

// calc and calc2 is the same thing

var calc2 = (w: number, h?: number) => {
	if (h === undefined) {
		return w * h;
	}
	return w * h;
}





// A function that takes no parameters and returns a string
var sayHello = () => 'hello world';





// A function _definition_ that takes a string and returns nothing (void):
var nothing: (msg: string) => void;

// The function that uses the definition above:
nothing = function(msg){

}





// A function definition and implementation:
var something: (msg: string) => string = function(msg: string) {
	return msg;
}










// Interfaces
//	- Can be applied to functions
//	- Can be applied to classes

interface SquareFunction {
	// Defines a function that takes a number parameter and returns a number:

	(x: number): number;
}

// The function that implements the interface above, using lambda:
var squareFunc: SquareFunction = (num) => num * num;

// Same as above, but with "regular" function syntax:
var squareFunc2: SquareFunction = function(num)  {
	return num * num;
}

interface Rectangle {
	// Defines two number fields

	h: number;
	w: number;
}

// A function that takes an object that implements the Rectangle interface:
var calcSquare = (rect: Rectangle) => rect.h * rect.w;




interface Person {
	firstName: string;
	lastName: string;
	age?: number;
	phone: number;
	email: string;	
	getFullName: () => string;
	sendEmail: (content: string) => void;
	greet: (msg: string) => string;
}

// Object that implements the interface above:
var johnSmith: Person = {
	firstName: 'John',
	lastName: 'Smith',
	age: 20,
	phone: 11223344,
	email: 'john@smith.com',
	getFullName: function(){
		return this.firstName + " " + this.lastName;
	},
	sendEmail: (content: string) => {
	},
	greet: (msg: string) => "Greetings, " + this.getFullName()
}





// Extending interfaces

interface stuff {
	things: string;
}

interface moreStuff extends stuff {
	moreThings: string;
}










// Classes
// - All fields in a class is public by default 

class Car {
	engine: string; // public

	private make: string; // private

	constructor(make: string, engine: string) {
		this.make = make;
		this.engine = engine;
	}
}

var car = new Car('volvo', 'v8');
var engine = car.engine;





class Car2 {
	constructor(public engine: string) {
		// Note the public in the constructor.
		// This creates a public field and assigns it behind the scenes.
	}
}

class Car3 {
	// The 'get' and 'set' are keywords that will create
	// getters and setters on the prototype object behind the scenes.
	// Note: This only works on ES5 and above and the newest browsers.
	// Note 2: the underscore naming convention (_engine) is just 
	// a common naming pattern for something that is private that is no 
	// TypeScript syntax.

	private _engine: string;

	get engine(): string {
		return this._engine;
	}

	set engine(value: string) {
		if (value === undefined)
			throw 'Engine is required!';

		this._engine = value;
	}

	start() {
		return "Started " + this._engine;
	}

	stop() {
		return "Stopped " + this._engine;
	}
}

var myCar = new Car3();
myCar.engine = 'V8'; // Use the setter
log('myCar has its engine property set to: ' + myCar.engine);
myCar.start();










// Inheritance

interface ILivingThing {

}

class Animal implements ILivingThing {

}

class Tiger extends Animal {
	constructor(){
		super();
	}
}








// Generics

class Intern {

}

class Employee <T> {
	
}

class Firm {
	interns: Employee<Intern>[] = [ new Employee<Intern>(), new Employee<Intern>() ];
}





interface IFancy {

}

function doStuff<T extends IFancy>(input: T) : T {
	return input;
}










// Casting

var tiger = new Tiger();
var animal: Animal = <Animal>tiger;









// Modules
// A module is like a namespace or encapsulation of code.

module MyApp {

	class MyClass {
		// This class is private in the module
	}

	var instance = new MyClass(); // Also private
}

module MyApp {
	export class MyClass {
		// The export keyword makes it public
	}
}

var newInstance = new MyApp.MyClass();












// Enums

enum TrafficLight { Red, Yellow, Green };

var trafficLight: TrafficLight = TrafficLight.Green;
