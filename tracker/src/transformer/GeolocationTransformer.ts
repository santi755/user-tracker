import Transformer from "./Transformer";
import GeolocationExtractor from "./geolocation/GeolocationExtractor";

export default class GeolocationTransformer implements Transformer {
    constructor(private readonly geolocationExtractor: GeolocationExtractor) {
    }

    async transform(input: any): Promise<any> {
        try {
            const geolocation = await this.geolocationExtractor.extract(input.ip);
            return {...input, geolocation};
        } catch (e) {
            return {
                ...input,
                latitude: 0,
                longitude: 0,
                city: '',
                region: '',
                country: '',
            };
        }
    }
}