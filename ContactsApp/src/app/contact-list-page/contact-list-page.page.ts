import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.page.html',
  styleUrls: ['./contact-list-page.page.scss'],
})
export class ContactListPagePage implements OnInit {

  private techList : string;
  constructor(private http: HttpClient) {

   }

  ngOnInit() {

    let obs = this.http.get('https://lvpcxvos1f.execute-api.us-east-1.amazonaws.com/dev/teammembers');
        obs.subscribe((responseData)=> {this.parseResponse (responseData)});


  }
  
  parseResponse(responseData : any){
    this.techList = responseData['body']['teamMembers'];
  }

}
