'use strict';

class CommonValidator {

    constructor(msg) {
        this.errorMessage = msg || 'Common error message';
        this.toString = () => {
            return this.errorMessage;
        }
    }
}

class Required {
    constructor() {
        CommonValidator.call(this, 'This field is required.');
        this.test = value => {
            return value.length > 0;
        }
    }
}

class MinLength {
    constructor(value) {
        CommonValidator.call(this, 'Min length should be 7');
        this.test = value => {
            return value.length >= 7;
        }
    }
}

class ContainSing {
    constructor(value) {
        CommonValidator.call(this, 'Should be contained sing @');
        this.test = value => {
            return value.indexOf('@') !== -1;
        }
    }
}