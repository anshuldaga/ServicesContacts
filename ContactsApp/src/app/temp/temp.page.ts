import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.page.html',
  styleUrls: ['./temp.page.scss'],
})
export class TempPage implements OnInit {

  listData : string = '';

  memberlist : string = '';


  constructor(private http: HttpClient) {
    console.log("111")
  var yourData : any;
  
    yourData={
      "contactList":[
        {"fName" : "John", "lName" : "Doe"},
        {"fName" : "Susan", "lName" : "Hunch"}
      ]
    }

    this.listData = yourData.contactList;

   }

  ngOnInit() {
        console.log("222222" + this.listData);

        this.http.get('https://lvpcxvos1f.execute-api.us-east-1.amazonaws.com/dev/teammembers')
        .subscribe((data: Response) => {
        const responseData = data['body']['teamMembers'];
        
        this.memberlist = responseData;

        });
        console.log("*** Memberlist:" + this.memberlist);

          


  }

}
