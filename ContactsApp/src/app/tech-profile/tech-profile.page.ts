import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { find, isEmpty } from 'lodash';

@Component({
  selector: 'app-tech-profile',
  templateUrl: './tech-profile.page.html',
  styleUrls: ['./tech-profile.page.scss'],
})
export class TechProfilePage implements OnInit {

private techList : Array<any> = [];
private techId : string;
private techDetails: string;


constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  ionViewWillEnter() {
    this.techId = this.route.snapshot.paramMap.get('id');
    console.log("Checking techID:" + this.techId);


  }

  ngOnInit() {

    let obs = this.http.get('https://lvpcxvos1f.execute-api.us-east-1.amazonaws.com/dev/teammembers');
        obs.subscribe((responseData)=> {this.parseResponse (responseData)});

  }

parseResponse(responseData : any){
    this.techList = responseData['body']['teamMembers'];
     this.techDetails = this.techList.find(x=>x.id == this.techId);
     console.log("Checking techDetails:");
     console.log(this.techDetails);
     

  }
}

