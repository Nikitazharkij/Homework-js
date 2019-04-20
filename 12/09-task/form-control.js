function FormControl(type, id, validators) {
    this.control = getControl();
    this.validationErrors = [];

    this.isValid = getValidation.bind(this)();

    this.addClass = classes => {
        try {
            if (!Array.isArray(classes)) {
                throw new Error('Param should be an array of strings');
            }

            let classList = this.control.classList;
            classes.forEach(item => {
                if (classList.contains(String(item))) {
                    return false;
                }

                classList.add(String(item));
            });
        } catch (e) {
            console.log(e.message);
            return false;
        }

    };

    this.removeClass = classes => {
        try {
            if (!Array.isArray(classes)) {
                throw new Error('Param should be an array of strings');
            }

            let classList = this.control.classList;
            console.log(classList);
            classes.forEach(item => {
                if (classList.contains(String(item))) {
                    classList.remove(String(item));
                }
                return true;

            });
        } catch (e) {
            console.log(e.message);
            return false;
        }

    };

    this.startCheck = () => {
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
        this.validationErrors.forEach(error => {
            text += `<span>${error}</span><br />`;
        });

        errorContainer.innerHTML = text;
    };

    function getValidation() {
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

    function _init() {
        const self = this;
        this.control.addEventListener('input', this.startCheck.bind(self));
    }

    function getControl() {
        let controls = document.getElementsByTagName(type);

        controls = [].slice.call(controls, 0);

        return controls.filter(control =>{
           return control.id === id;
        })[0];
    }
}