import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { find, isEmpty } from 'lodash';

@Component({
  selector: 'app-tech-search',
  templateUrl: './tech-search.page.html',
  styleUrls: ['./tech-search.page.scss'],
})
export class TechSearchPage implements OnInit {

  private techList: Array<any> = [];
  constructor(private http: HttpClient) { }

  private skillSet : string;
  getSkilledTechlist(){
    console.log("@@@ selected skill set:"+ this.skillSet);
    
     let obs = this.http.get('http://localhost:3000/searchTechBySkills/'+this.skillSet);
     obs.subscribe((responseData) => { this.parseResponse(responseData) });
  }

  ngOnInit() {
   
  }

  parseResponse(responseData: any) {
    this.techList = responseData;
  }
}
