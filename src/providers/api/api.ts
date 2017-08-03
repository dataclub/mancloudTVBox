import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {
  uri: String = 'http://localhost/mancloudTVBoxDB/api.php/';
  transform: boolean = true;
  countries: object[] = [];

  constructor(public http: Http) {}

  get(params, callback) {
    var returnValue = null;
    switch (params.table) {
      case 'countries':
        returnValue = this.getCountries(callback);
        break;
      case 'channels':
        returnValue = this.getChannels(params.filter, callback);
      break;
      default:
        break;
    }
      return returnValue;
  }

  getCountries(callback) {
    var withoutCallBack = this.http.get(this.uri + 'countries' + this.getTransform())
    .map(res => res.json());
    withoutCallBack.subscribe(data => {
      this.countries = data.countries;
      if (typeof (callback) != 'undefined') {
        callback(data);
      }
    });
    return withoutCallBack;
  }

  getChannels(filter, callback){
    var uri = this.uri + 'channels' + this.getTransform();
    if(typeof(filter) != 'undefined'){
      uri += "&filter[]="+filter
    }
    var withoutCallBack = this.http.get(uri)
    .map(res => res.json());
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

}
