import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
export default class AccountCreator extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD,INDUSTRY_FIELD,ANNUALREVENUE_FIELD];

    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title : "Account Created",
            message : "Record Id " + event.detail.id,
            variant: "success" 
        });
        this.dispatchEvent(toastEvent);
    }
}