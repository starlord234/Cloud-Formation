import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
    handleClick() {
        this.template.querySelector('lightning-flow').startFlow('CallLwcInFlow', this.inputVariables);
    }

    get inputVariables() {
        return [];
    }

    handleStatusChange(event) {
        console.log('handleStatusChange', event.detail);
    }
}