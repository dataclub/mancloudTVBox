import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    countries: Observable<any>;
    country: String;

    channels: Observable<any>;
    channel: String;

    langs;
langForm;



    constructor(public navCtrl: NavController, public platform: Platform, public apiProvider: ApiProvider) {
        platform.ready().then(() => {
           this.countries = apiProvider.get({table: 'countries'}, function(data){
                console.log(data.countries);
            });
        });

            this.langForm = new FormGroup({
            "langs": new FormControl({value: 'rust', disabled: false})
        });

    }

    clickCountry(country) {
        this.country = country;
        
        
        //TODO: get only channels of country again
        this.channels = this.apiProvider.get({table: 'channels', filter: 'country,eq,' + country}, function(data){
            console.log(data.channels);
        });   
    }

    doSubmit(event) {
        console.log('Submitting form', this.langForm.value);
        event.preventDefault();
    }

}