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

  memberlist : string = 'temp member';


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

        console.log("check values:"+this.listData); // when do like this- it only prints obj obj
        console.log(this.listData); // but like this prints real values



        //this.http.get('https://api.github.com/users/touch2info')        
        this.http.get('https://lvpcxvos1f.execute-api.us-east-1.amazonaws.com/dev/teammembers')
        .subscribe((response) => console.log(response));

        this.http.get('https://lvpcxvos1f.execute-api.us-east-1.amazonaws.com/dev/teammembers')
        .subscribe((data: Response) => {
        const responseData = data['body']['teamMembers'];
        this.memberlist = responseData;
        console.log(this.memberlist);

        });
        
        console.log("*** Memberlist**** :");
        console.log( this.memberlist);
        console.log("*** Memberlist END **** :");

          


  }

}
