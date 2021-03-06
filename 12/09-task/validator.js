'use strict';

class CommonValidator {

    constructor(msg) {
        this.errorMessage = msg || 'Common error message';
        this.toString = () => {
            return this.errorMessage;
        }
    }
}

export class Required extends CommonValidator {
    constructor() {
        super('This field is required.');
        this.test = value => {
            return value.length > 0;
        }
    }
}

export class MinLength extends CommonValidator {
    constructor(value) {
        super('Min length should be 7');
        this.test = value => {
            return value.length >= 7;
        }
    }
}

export class ContainSing extends CommonValidator {
    constructor(value) {
        super('Should be contained sing @');
        this.test = value => {
            return value.indexOf('@') !== -1;
        }
    }
}
