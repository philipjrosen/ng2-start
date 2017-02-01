class Greeter {
    saySomething(message: string = 'whats up') {
        return message + 'something';
    }
}

let greeter = new Greeter();

greeter.saySomething('hello');