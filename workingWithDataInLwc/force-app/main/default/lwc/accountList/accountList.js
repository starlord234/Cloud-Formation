import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { reduceErrors } from '../ldsUtils/ldsUtils';
const COLUMNS = [
    {label: 'Account Name',fieldName:NAME_FIELD.fieldApiName,type:'text'},
    {label:'Annual Revenue', fieldName:ANNUALREVENUE_FIELD.fieldApiName, type:'currency'},
    {label:'Industry',fieldName:INDUSTRY_FIELD.fieldApiName, type:'text'}];

export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire (getAccounts)
    accounts;

    get errors() {
        return (this.accounts.error) ?
            reduceErrors(this.accounts.error) : [];
    }
}