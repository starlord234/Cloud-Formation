import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/Contact.LastName';
import Email_FIELD from '@salesforce/schema/Contact.Email';
const Columns = [
    {label:'FirstName', field:FirstName_FIELD.fieldApiName, type:'Text'},
    {label:'LastName', field:LastName_FIELD.fieldApiName, type:'text'},
    {label:'Email', field:Email_FIELD.fieldApiName, type:'Email'}
];
export default class Contact_list extends LightningElement {
    columns = Columns
@wire(getContacts) conlist;
}