'use strict';

export class FormControl {

    constructor(type, id, validators, helper) {
        this.control = getControl();
        this.validationErrors = [];

        this.isValid = getValidation.bind(this)();

        this.startCheck = () => {
            this.isValid = getValidation.bind(this)();
            console.log(this.isValid);

            if (!this.isValid) {
                helper.addClass(this.control, ['error']);
            } else {
                helper.removeClass(this.control, ['error']);
            }

            const errorContainer = this.control.parentNode.querySelector('.error-list');
            let text = '';
            console.log(this.validationErrors);
            this.validationErrors.forEach(error => {
                text += `<span>${error}</span><br />`;
            });

            errorContainer.innerHTML = text;
        };

    }

    getValidation() {
        let isValid = true;
        const self = this;

        validators.forEach(item => {
            const validator = new (window[item])();

            if (!(validator.test(self.control.value))) {
                isValid = false;
                if (self.validationErrors.indexOf(validator.toString()) === -1) {
                    self.validationErrors.push(validator.toString());
                }
            } else {
                let errorIndex = self.validationErrors.indexOf(validator.toString());
                if (errorIndex !== -1) {
                    self.validationErrors.splice(errorIndex, 1);
                }
            }
        });

        return isValid;
    }

    _init.bind(this)();

    _init() {
        const self = this;
        this.control.addEventListener('input', this.startCheck.bind(self));
    }

    getControl() {
        let controls = document.getElementsByTagName(type);

        controls = [].slice.call(controls, 0);

        return controls.filter(control =>{
           return control.id === id;
        })[0];
    }
};