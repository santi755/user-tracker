import Config, {Type} from "./Config";

export default class ConfigFactory<T> {
    constructor(
        private readonly servicesMap: Map<string, T>,
        private readonly property: string
    ) {
    }

    fromConfig(config: Config): Array<T> {
        return config
            [this.property]
            .filter((dep: string) => this.servicesMap.has(dep as Type))
            .map((dep: string) => this.servicesMap.get(dep));
    }
}