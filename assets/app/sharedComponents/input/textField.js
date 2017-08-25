import { textfield as mdcTextfield } from 'material-components-web';

const {MDCTextField, MDCTextFieldFoundation} = mdcTextfield;

export default {
	name: 'TextField',
	props: [
		'validationMessage',
		'label',
		'value'
	]
}