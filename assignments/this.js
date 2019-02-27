/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
*  1. Window/Global Object Binding
"This" will return the window or global object whenver we are in the global scope.

* 2. Implicit Binding
You can bind "this" to an object when "this" is called within said object.

* 3. New Binding
You can use a constructor function to bind "this" to the constructor function so 
that every every specific instance of that constructor has its own "this".

* 4. Explicit Binding
We can explicitly bind "this" using .call and .apply, which can override the 
New Binding principle we saw with constructors.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
hello = name => name;

hello('world');


// Principle 2

// code example for Implicit Binding
const me = {
    firstName: 'Mckay',
    lastName: 'Wrigley',
    age: 21,
    yearsTo100: () => {
        let yearsTo100 = 100 - this.age;
        console.log(`${this.firstName} ${this.lastName} has ${yearsTo100} years left until turning 100.`);
    }
}
me.yearsTo100();


// Principle 3

// code example for New Binding

function Person(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.intro = () => {
        console.log(`${this.firstName} ${this.lastName} is ${this.age}.`);
    }
}

const cartman = new Person('Eric', 'Cartman', 10);
const kyle = new Person('Kyle', 'Broflofski', 11);

cartman.intro();
kyle.intro();


// Principle 4

// code example for Explicit Binding
cartman.intro.call(kyle);
kyle.intro.apply(cartman);
