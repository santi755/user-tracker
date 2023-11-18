export default class IP {
    constructor(
        public readonly value: string
    ) {
        if (!this.isValid()) {
            throw new Error('Invalid IP address');
        }
    }

    private isValid(): boolean {
        const regex = /^([0-9]{1,3}.){3}[0-9]{1,3}$/;

        return regex.test(this.value);
    }
}