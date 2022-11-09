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
}
