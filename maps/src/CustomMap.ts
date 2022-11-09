//Instruction to every other class on how they can be a agrument to add Maker
interface Mappable {
    location: {
        latitude: number;
        longitude: number;
    };
    markerContent(): string;
}
export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        //add the map to a div provided provide in index.ts
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    addMaker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.latitude,
                lng: mappable.location.longitude,
            },
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}