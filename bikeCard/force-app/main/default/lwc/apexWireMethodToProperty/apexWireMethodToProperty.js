import getContactsList from '@salesforce/apex/contactsList.getContactsList';
import { LightningElement, wire } from 'lwc';

export default class ApexWireMethodToProperty extends LightningElement {

    
    @wire(getContactsList) contacts;
    
}