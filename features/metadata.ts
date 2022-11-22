import 'reflect-metadata';
@controller
class Plane {
    color: string = 'red';
    @get('./login')
    fly(): void {
        console.log('vrrrrr');
    }
}

function get(path: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    };
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);
        const middleware = Reflect.getMetadata(
            'middleware',
            target.prototype,
            key
        );
        rounter.get(path, middleware, target.prototype[key]);
        //target.prototype[k] is the route handler
    }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
