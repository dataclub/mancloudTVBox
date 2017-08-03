import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  template: ''
})
export class ApiProvider {
  uri: String = 'http://localhost/mancloudTVBoxDB/api.php/';
  transform: boolean = true;


  countries: object[] = [];

  constructor(public platform: Platform, public http: Http) {
    platform.ready().then(() => {
    });
  }

  get(table, callback) {
    var returnValue = null;
    switch (table) {
      case 'countries':
        returnValue = this.getCountries(callback);
        break;

      default:
        break;
    }
      return returnValue;
  }

  getCountries(callback) {
    var withoutCallBack = this.http.get(this.uri + 'countries' + this.getTransform()).map(res => res.json());
    withoutCallBack.subscribe(data => {
      this.countries = data.countries;
      if (typeof (callback) != 'undefined') {
        callback(data);
      }
    });
    return withoutCallBack;
  }

  getTransform(){
    return '?transform=1';
  }

  /*
  getAudits() {
    // console.log('audits' + amplify.store('audits'));
    console.log(123);
    let audits: Object[] = this.countries;   
    console.log(this.countries);
    return Promise.resolve(audits);
  }
 

  is(method, field) {
    var data = [];
    switch (method) {
      case 'loaded':
        console.log(123);

        data = [123];
        break;

      default:
        break;
    }

    return data;
  }
   */

}