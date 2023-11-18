"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class IpInfoGeolocationExtractor {
    constructor() {
        this.IP_INFO_URL = 'https://ipinfo.io/';
    }
    extract(ip) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.IP_INFO_URL}${ip.value}/json`);
            const body = yield response.json();
            const [latitude, longitude] = body.loc.split(',');
            return {
                city: body.city,
                region: body.region,
                country: body.country,
                latitude,
                longitude
            };
        });
    }
}
exports.default = IpInfoGeolocationExtractor;
