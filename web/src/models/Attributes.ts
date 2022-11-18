export class Attributes<T> {
    constructor(private data: T) {}
    get<K extends keyof T>(key: K): T[K] {
        //K is a generics constraint which only allows key of T as the parameter of this function
        return this.data[key];
    }
    set(update: T): void {
        //assign all properties of update to data of this user overrides the first
        this.data = { ...this.data, ...update };
    }
}

// const attrs = new Attribute<UserProps>({
//     id: 5,
//     age: 20,
//     name: 'Amy',
// });
// const name = attrs.get('name');
// const age = attrs.get('age');
