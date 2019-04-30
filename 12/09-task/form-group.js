class FormGroup {

    constructor(id) {
        const form = getForm();
        this.formControls = [];
        this.addClass = classes => {
            try {
                if (!Array.isArray(classes)) {
                    throw new Error('Param should be an array of strings');
                }

                let classList = form.classList;
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

                let classList = form.classList;
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
    }

    this.isValid = getStatus.bind(this)();

    _init.bind(this)();

    _init() {
        const self = this;

        form.addEventListener('submit', event => {
            event.preventDefault();

            self.isValid = getStatus.bind(self)();
            if (self.isValid) {
                self.removeClass(['error']);
                console.log('Data was sent');
                return true;
            }

            console.log('Form is not valid');
            self.addClass(['error']);
            self.formControls.forEach(control => {
               control.startCheck();
            });

            return false;
        });
    }

    getForm() {
        let forms = document.getElementsByTagName('form');
        forms = [].slice.call(forms, 0);

        return forms.filter(item => {
           return item.id === id;
        })[0];
    }

    this.registerControls = control => {
      this.formControls.push(control);
      this.isValid = getStatus.bind(this)();
    };

    getStatus() {
        try {
            if(this.formControls.length === 0) {
                throw new Error('No detected form control elements');
            }

            let status = true;
            console.log(this.formControls);
            this.formControls.forEach(item => {
                if (!item.isValid) {
                    status = false;
                    return false;
                }
            });

            return status;

        } catch(e) {
            console.log(e.message);
            return true;
        }
    }
}