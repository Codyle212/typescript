import fs from 'fs';

export abstract class CsvFileReader<T> {
    abstract mapRow(row: string[]): T;
    data: T[] = [];

    constructor(public filename: string) {}
    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf8',
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            //parsing the data
            .map(this.mapRow);
    }
}
