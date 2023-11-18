import GeolocationExtractor from "./GeolocationExtractor";
import Geolocation from "./Geolocation";
import IP from "./IP";

export default class IpInfoGeolocationExtractor implements GeolocationExtractor {
    private readonly IP_INFO_URL = 'https://ipinfo.io/';

    async extract(ip: IP): Promise<Geolocation> {
        const response = await fetch(`${this.IP_INFO_URL}${ip.value}/json`)
        const body: any = await response.json();
        const [latitude, longitude] = body.loc.split(',')

        return {
            city: body.city,
            region: body.region,
            country: body.country,
            latitude,
            longitude
        }
    }
}