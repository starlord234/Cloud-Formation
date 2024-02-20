import getAccountList from '@salesforce/apex/accountList.getAccountList';
import { LightningElement, wire } from 'lwc';

export default class GetAccountList extends LightningElement {
    @wire (getAccountList) listOfAccount;
}