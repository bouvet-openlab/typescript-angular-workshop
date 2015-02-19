declare var log: (obj: any) => void;
declare var whatever: any;
declare var name: string;
declare var age: number;
declare var isAwesome: boolean;
declare var whatever: any;
declare var name: string;
declare var age: number;
declare var isAwesome: boolean;
declare var name: string;
declare var age: number;
declare var isAwesome: boolean;
declare var names: string[];
declare var name: string;
declare var age: number;
declare var isAwesome: boolean;
declare var person: {};
declare var points: Object;
declare var square: {};
declare var calc: (w: number, h?: number) => number;
declare var calc2: (w: number, h?: number) => number;
declare var sayHello: () => string;
declare var nothing: (msg: string) => void;
declare var something: (msg: string) => string;
interface SquareFunction {
    (x: number): number;
}
declare var squareFunc: SquareFunction;
declare var squareFunc2: SquareFunction;
interface Rectangle {
    h: number;
    w: number;
}
declare var calcSquare: (rect: Rectangle) => number;
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
declare var johnSmith: Person;
interface stuff {
    things: string;
}
interface moreStuff extends stuff {
    moreThings: string;
}
declare class Car {
    engine: string;
    private make;
    constructor(make: string, engine: string);
}
declare var car: Car;
declare var engine: string;
declare class Car2 {
    engine: string;
    constructor(engine: string);
}
declare class Car3 {
    private _engine;
    engine: string;
    start(): string;
    stop(): string;
}
declare var myCar: Car3;
interface ILivingThing {
}
declare class Animal implements ILivingThing {
}
declare class Tiger extends Animal {
    constructor();
}
declare class Intern {
}
declare class Employee<T> {
}
declare class Firm {
    interns: Employee<Intern>[];
}
interface IFancy {
}
declare function doStuff<T extends IFancy>(input: T): T;
declare var tiger: Tiger;
declare var animal: Animal;
declare module MyApp {
}
declare module MyApp {
    class MyClass {
    }
}
declare var newInstance: MyApp.MyClass;
declare enum TrafficLight {
    Red = 0,
    Yellow = 1,
    Green = 2,
}
declare var trafficLight: TrafficLight;
