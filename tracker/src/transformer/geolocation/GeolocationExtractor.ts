import IP from "./IP";
import Geolocation from "./Geolocation";

interface GeolocationExtractor {
    extract(ip: IP): Promise<Geolocation>
}

export default GeolocationExtractor;