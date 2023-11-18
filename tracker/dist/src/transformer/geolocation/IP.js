"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IP {
    constructor(value) {
        this.value = value;
        if (!this.isValid()) {
            throw new Error('Invalid IP address');
        }
    }
    isValid() {
        const regex = /^([0-9]{1,3}.){3}[0-9]{1,3}$/;
        return regex.test(this.value);
    }
}
exports.default = IP;
