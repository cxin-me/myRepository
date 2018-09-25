import { Component, OnInit } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http'; //表单模块
@Component({
  selector: 'app-http-data',
  templateUrl: './http-data.component.html',
  styleUrls: ['./http-data.component.css']
})
export class HttpDataComponent implements OnInit {

  // private headers:Headers;
  constructor(private http: Http, private jsonp: Jsonp, private headers: Headers) {
    this.headers = new 　Headers({ 'Content-Type': 'application/json' })
  }

  ngOnInit() {
  }

  requestGetHttpData() {
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
    this.http.get(url).subscribe(function (data) {

      console.log(data)
    }, function (err) {
      console.log(err)
    })
  }
  requestGeJsonpData() {
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
    this.jsonp.get(url).subscribe(function (data) {

      console.log(data)
    }, function (err) {
      console.log(err)
    })
  }

  requestPostHttpData() {

    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
    this.http.post(url,
      JSON.stringify({"username":"zhanfsan"}),
      {headers:this.headers}
      ).subscribe(function (data) {

      console.log(data)
    }, function (err) {
      console.log(err)
    })
  }

}
