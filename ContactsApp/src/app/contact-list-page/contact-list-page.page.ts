import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { find, isEmpty } from 'lodash';


@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.page.html',
  styleUrls: ['./contact-list-page.page.scss'],
})
export class ContactListPagePage implements OnInit {

  private techList : Array<any> = [];
  // private techProfile : string ="default value";
  constructor(private http: HttpClient) {

   }
   

  ngOnInit() {
//8081 accessing second server that has the backend code which is accessing a specific service (listUsers)
    let obs = this.http.get('http://localhost:3000/getTechList');
        obs.subscribe((responseData)=> {this.parseResponse (responseData)});
        //parseResponse because it is properly formated json file

    // this.getTechDetails();

  }
  
  parseResponse(responseData : any){
    //this.techList = responseData['body']['teamMembers'];
    this.techList = responseData;

/*     console.log("@@@ in parse response method");
    console.log(this.techList);
    var techName = this.techList.find(x=>x.userid == 'ashishd').name;
    console.log("@@@ check tech profile:");
    console.log(techName); */
  }
}

/*   getTechDetails(){
    console.log("@@@ inside getTech Detail method");
    console.log(this.techList);
    //this.techProfile = find(this.techList, { 'userid': ('ashishd') });
    var techName = this.techList.find(x=>x.userid == 'ashishd');
    console.log("@@@ check tech profile:");
    console.log(techName); 
    
  }*/

