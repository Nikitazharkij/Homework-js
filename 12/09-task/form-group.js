'use strict';

export class FormGroup {

    constructor(id, helper) {
        const form = getForm();
        this.formControls = [];
    }

    this.isValid = getStatus.bind(this)();

    _init.bind(this)();

    _init() {
        const self = this;

        form.addEventListener('submit', event => {
            event.preventDefault();

            self.isValid = getStatus.bind(self)();
            if (self.isValid) {
                helper.removeClass(form, ['error']);
                console.log('Data was sent');
                return true;
            }

            console.log('Form is not valid');
            helper.addClass(form, ['error']);
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
};