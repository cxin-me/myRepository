import { Component, OnInit,  Inject ,} from '@angular/core';
import { ApiService } from '../../services/api/api.service';


@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit {

  private apiService:ApiService

  constructor(@Inject(ApiService) apiService ) {
    this.apiService=apiService
   }

  ngOnInit() {
    this.apiService.printLog();
  }

}
