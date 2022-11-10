export class CharactersCollection {
    constructor(public data: string) {}
    get length(): number {
        return this.data.length;
    }
    compare(leftIndex: number, rightIndex: number): boolean {}
    swap(leftIndex: number, rightIndex: number): void {}
}
