const add = (a: number, b: number): number => {
    return a + b;
};

const substract = (a: number, b: number): number => {
    return a - b;
};

const divide = (a: number, b: number): number => {
    return a / b;
};

const multiple = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};
// expect to throw an error and never returns anything user never
const throwError = (message: string): never => {
    throw new Error(message);
};

const forecast = {
    date: new Date(),
    weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
//ES6
const logWeatherES6 = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};
