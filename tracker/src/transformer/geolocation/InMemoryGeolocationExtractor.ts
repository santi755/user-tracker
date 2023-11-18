import GeolocationExtractor from "./GeolocationExtractor";
import IP from "./IP";
import Geolocation from "./Geolocation";

export default class InMemoryGeolocationExtractor implements GeolocationExtractor {
    private readonly geolocations: Map<string, Geolocation> = new Map<string, Geolocation>();

    constructor(private readonly internal: GeolocationExtractor) {}

    async extract(ip: IP): Promise<Geolocation> {
        if (this.geolocations.has(ip.value)) {
            return this.geolocations.get(ip.value)!;
        }

        const geolocation = await this.internal.extract(ip);
        this.geolocations.set(ip.value, geolocation);

        return geolocation;
    }
}