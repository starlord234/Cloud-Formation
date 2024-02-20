import { LightningElement, track, wire } from 'lwc';
import getAccountsList from '@salesforce/apex/getAccounts.getAccountsList';

export default class SearchAccount extends LightningElement {
    @track searchkey
    @wire(getAccountsList,{strAccountName : '$searchkey'})accounts;
    handleChange(event){
        this.searchkey = event.target.value;
    }
}