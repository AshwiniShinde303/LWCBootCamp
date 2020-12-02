import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/LWCBootcamp';

export default class ConditionalRendering extends LightningElement {
    

    Tom = My_Resource + '/images/salesfoce-Tom.jpg';
    Jerry = My_Resource + '/images/salesfoce-jerry.jpg';

    showpic = false;

    display(event){

        this.showpic =true;
    }

    display2(event){

        this.showpic =false;
    }

}