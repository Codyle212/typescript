@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    get formatedColor(): string {
        return `This boat is ${this.color}`;
    }
    @logError('Oops, the boat was sunk')
    pilot(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ): void {
        if (speed === 'fast') {
            console.log('swish');
        } else {
            console.log('nothing');
        }
    }
}

function classDecorator(constructor: typeof Boat) {
    //typeof Boat reference the constructor
    console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);
    //index is the index of the argument
}

function testDecorator(target: any, key: string): void {
    console.log('Target:', target);
    console.log('Key:', key);
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        //assign pilot's value to method
        // attached to method that has the decorator
        const method = desc.value;
        desc.value = function () {
            try {
                method();
            } catch (e) {
                console.log(errorMessage);
            }
        };
    };
}
