import * as config from '../config/tracker.json';
import InputReaderFactory from "./input/InputReaderFactory";
import TransformerFactory from "./transformer/TransformerFactory";
import Config from "./Config";
import GeolocationTransformer from "./transformer/GeolocationTransformer";
import IpInfoGeolocationExtractor from "./transformer/geolocation/IpInfoGeolocationExtractor";
import OutputFactory from "./output/OutputFactory";

const transformerMap = new Map;
transformerMap.set('geolocation', new GeolocationTransformer(new IpInfoGeolocationExtractor()));

const configuration = config as Config;

const inputReader = InputReaderFactory.fromConfig(configuration);
const transformer = new TransformerFactory(transformerMap).fromConfig(configuration);
const output = OutputFactory.fromConfig(configuration);

const start = async () => {
    const inputs = await inputReader.read();
    const promises = [];
    console.log(inputs)
    for (const input of inputs) {
        const enrichedInput = await transformer.transform(input);

        promises.push(output.write(enrichedInput));
    }

    await Promise.all(promises);
}


start().then(() => {});
setInterval(() => {
    start().then(() => {});
}, configuration.interval);