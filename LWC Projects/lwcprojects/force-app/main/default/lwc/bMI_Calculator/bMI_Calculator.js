import { LightningElement, track } from 'lwc';

export default class BMI_Calculator extends LightningElement {
    title = "BMI Calculator";
     @track height;
     @track weight;
     @track result=0;
     @track category;

    handleHeightChange(event){
        this.height = parseFloat(event.target.value);
    }

    handleWeightChange(event){
        this.weight = parseFloat(event.target.value);
    }

    handleClick(){
        result = this.weight/(this.height*this.height);
    }
}
  
