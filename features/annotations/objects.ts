const profile = {
    name: 'alex',
    age: 20,
    coords: { lat: 0, lng: 15 },
    setAge(age: number): void {
        this.age = age;
    },
};
//destructure age
const { age, name }: { age: number; name: string } = profile;
//destructure longtitude and latitude
const {
    coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
