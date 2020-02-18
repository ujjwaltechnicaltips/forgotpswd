import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResetService {
  readonly rootUrl = 'https://qa.apilink.com';
  constructor(private http: HttpClient) { }
   userAuthentication(userId, password) {
    var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODIwOTQ0OTIsImlhdCI6MTU4MjAwODA5MiwiYWNjb3VudFR5cGUiOiJERUFMRVIiLCJ1c2VyRW1haWwiOiJqYWdhdEBmaXJzdGhhbmRsZS5jb20iLCJ1c2VySWQiOjMwLCJ1c2VyUm9sZSI6IlNFTExFUiIsImNvbXBhbnlJZCI6OX0.rxae_Fg6CEpDg2gr-TpsYrut0CC_4erQ5ZLk60LrtG8";
    var bearerToken = "Bearer " + accessToken;
    let data = {query: 'mutation($in: DealerUpdate!){updateDealer(in: $in){id}}', variables: { in : {
			id: userId,
			password: password
  }},}
let httpHeaders = new HttpHeaders({
  'Content-Type' : 'application/json',
  'Authorization': bearerToken,
  'Accept' : 'application/json'
 }); 
 let options = {
  headers: httpHeaders
  }; return this.http.post(this.rootUrl + '/graphql', data,{ headers:httpHeaders });
  }}

  