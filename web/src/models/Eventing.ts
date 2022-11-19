type Callback = () => void;

export class Eventing {
    //each type of events have an array of callbacks
    events: {
        [key: string]: Callback[];
    } = {};
    //arrow function is bound to the instance that creates it
    on = (eventName: string, callback: Callback): void => {
        //handler are an array, on event, append callback to the corresponding event
        const handlers = this.events[eventName] || [];
        this.events[eventName] = [...handlers, callback];
    };
    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];
        //check if there are callback in that event
        if (!handlers || handlers.length === 0) {
            return;
        }
        //execute every callback in that event callback array
        handlers.forEach((callback) => {
            callback();
        });
    };
}
