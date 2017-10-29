import { Injectable } from '@angular/core';
import { Http,URLSearchParams, Headers } from '@angular/http';

@Injectable()
export class SessionService {

  headers:Headers;

  constructor(private http: Http) { }

  getSession(){
  	var self = this;
  	var email = 'patty@gmail.com';
  	this.setHeaders();
  	this.headers.append('Access-Control-Allow-Origin','http://localhost:4200');

  	this.http.get('http://localhost:8084/api/getUser/'+email,{headers: this.headers}).map((response)=>response.json()).subscribe(
        function(data){
            this.result=data;
            console.log(this.result);
        }
      )
  }

  setSession(){

  }

  setHeaders(){
    this.headers = new Headers();
  }
}
