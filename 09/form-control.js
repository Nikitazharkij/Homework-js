function FormControl(type, id, validators, helper) {
    this.control = getControl();
    this.validationErrors = [];

    this.isValid = getValidation.bind(this)();

    helper.addClass();

    helper.removeClass();

    this.startCheck = function() {
        this.isValid = getValidation.bind(this)();
        console.log(this.isValid);

        if (!this.isValid) {
            this.addClass(['error']);
        } else {
            this.removeClass(['error']);
        }

        const errorContainer = this.control.parentNode.querySelector('.error-list');
        let text = '';
        console.log(this.validationErrors);
        this.validationErrors.forEach(function(error){
            text += `<span>${error}</span><br />`;
        });

        errorContainer.innerHTML = text;
    };

    function getValidation() {
        let isValid = true;
        const self = this;

        validators.forEach(function(item){
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

    function _init() {
        const self = this;
        this.control.addEventListener('input', this.startCheck.bind(self));
    }

    function getControl() {
        let controls = document.getElementsByTagName(type);

        controls = [].slice.call(controls, 0);

        return controls.filter(function(control){
           return control.id === id;
        })[0];
    }
}