function receivesAFunction(myCallback) {
    //call back function
    let greeting = "Hello!!";
    myCallback(greeting);
}
const returnsANamedFunction = ()=> {
    //return a named function
    return function namedFunction(){    };
}
const returnsAnAnonymousFunction = ()=> {
    return function () { };
    //return an anonymous function
}