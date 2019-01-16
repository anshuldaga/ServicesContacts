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

  ngOnInit() {
    //8081 accessing second server that has the backend code which is accessing a specific service (listUsers)
    let obs = this.http.get('http://192.168.1.208:3000/searchTechBySkills');
    obs.subscribe((responseData) => { this.parseResponse(responseData) });
  }

  parseResponse(responseData: any) {
    this.techList = responseData;
  }
}
