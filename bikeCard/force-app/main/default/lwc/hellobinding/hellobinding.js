import { LightningElement } from 'lwc';

export default class Hellobinding extends LightningElement {
   areDetailsVisible = 'False';

   handlechange(event){
    this.areDetailsVisible= event.target.checked;
   }
}