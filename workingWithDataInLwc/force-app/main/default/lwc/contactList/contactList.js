import { LightningElement, wire } from 'lwc';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/Contact.LastName';
import Email_FIELD from '@salesforce/schema/Contact.Email';
import Title_FIELD from '@salesforce/schema/Contact.Title';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'FirstName', fieldName:  FirstName_FIELD.fieldApiName, type: 'text' },
    { label: 'LastName', fieldName:LastName_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: Email_FIELD.fieldApiName, type: 'Email' },
    { label: 'Title', fieldName: Title_FIELD.fieldApiName, type:'text'}
];
export default class contactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
}