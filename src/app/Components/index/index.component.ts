import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as $ from 'jquery';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  message: string;
  no_relout: boolean;
  no_relin: boolean;
  relation: string = "";

  constructor(private ngxService: NgxUiLoaderService, private apiWord: ServiceService) { }

  receiveMessage($event) {
    this.message = $event;
    $('#mot').val(this.message);
  }
  ngOnInit() {
    this.no_relout = false;
    this.no_relin = false;
    this.apiWord.startServ().subscribe((res: any) => {
      console.log("starting");
      console.log(res);
    })
    //this.apiWord.getMot(message, relation).subscribe((res: Mot) => {
  }

  onSubmit(event) {
    event.preventDefault()
    const target = event.target
    const relation = target.querySelector("#id_relation").value;
    if (relation == null) {
      this.relation = "";
    } else {
      this.relation = relation;
    }
    const mot = target.querySelector('#mot').value
    this.message = mot;

  }

  noRelOut(event) {
    this.no_relout = event.target.checked
  }

  noRelIn(event) {
    this.no_relin = event.target.checked
  }

}
