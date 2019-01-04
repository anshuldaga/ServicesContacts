import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ActionSheetController } from '@ionic/angular';



@Component({
  selector: 'app-tech-details',
  templateUrl: './tech-details.page.html',
  styleUrls: ['./tech-details.page.scss'],
})
export class TechDetailsPage implements OnInit {

  private techList: Array<any> = [];
  private techDetails: string = "default value";
  private userId: string = "";
  
  constructor(private route: ActivatedRoute,private http: HttpClient, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

 async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }]
    });
    await actionSheet.present();
 }

//can't figure out why I am getting an error here for trying to put call function here
/*this.callNumber.callNumber("18001010101", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));*/



  ionViewWillEnter(){
     this.userId  = this.route.snapshot.paramMap.get('userId');
    console.log("got id from url is:"+this.userId);
    let obs = this.http.get('https://lvpcxvos1f.execute-api.us-east-1.amazonaws.com/dev/teammembers');
        obs.subscribe((responseData)=> {this.parseResponse (responseData)});
    // this.todo = this.todoService.getTodo(todoId);
  }


  parseResponse(responseData: Object): any {
    this.techList = responseData['body']['teamMembers'];
    this.techDetails = this.techList.find(x=>x.id == this.userId);
    console.log("@@ check the tech details info");
    console.log(this.techDetails);
    

    // throw new Error("Method not implemented.");
  }

}
