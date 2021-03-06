'use strict';

import { Required as CommonValidator } from './validator';
import { MinLength as CommonValidator } from './validator';
import { ContainSing as CommonValidator } from './validator';
import { FormGroup } from './form-group';
import { FormControl } from './form-control';
import { Helper } from './helper';

const helper = new Helper();
const itemForm = new FormGroup('registration', helper);
const control1 = new FormControl('input', 'login', ['Required', 'MinLength'], helper);
const control2 = new FormControl('input', 'email', ['Required', 'MinLength', 'ContainSing'], helper);
const control3 = new FormControl('input', 'password', ['Required', 'MinLength'], helper);
itemForm.registerControls(control1);
itemForm.registerControls(control2);
itemForm.registerControls(control3);
