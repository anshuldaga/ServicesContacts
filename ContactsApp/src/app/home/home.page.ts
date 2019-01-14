import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dateTimeMmessage : string;

  constructor()
  {
     //console.log("I am in constructor method ");
     setInterval(()=>this.myMethod(),1000);


     //this.myMethod();
  }


  myMethod(){

  let currentDtTime = new Date();
     this.dateTimeMmessage = currentDtTime.toDateString()+ "   "+ currentDtTime.toTimeString();

    //console.log("I am in my method... ");
  }
  

}
