import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { Mot } from 'src/app/Model/Mot';
import { Relation } from 'src/app/Model/Relation';
import { Key } from 'protractor';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() message: string;
  @Input() no_relout: boolean;
  @Input() no_relin: boolean;
  @Input() relation: string = "";

  res: Mot;
  page = 1;
  pageSize = 10;
  page2 = 1;
  pageSize2 = 10;

  SortEmpty: any;
  EnterEmpty: any;

  constructor(private httpClient: HttpClient, private apiWord: ServiceService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['message'] !== undefined)
      this.message = changes['message'].currentValue;

    if (changes['relation'] !== undefined)
      this.relation = changes['relation'].currentValue;

    this.ngxLoader.startLoader('loader-01'); // start non-master loader

    this.apiWord.getMot(this.message, this.relation).subscribe((res: Mot) => {


      this.res = res;
      if (this.res.mapEntrantes == null) {
        this.EnterEmpty = null;
      } else {
        this.EnterEmpty = Object.keys(this.res.mapEntrantes);
      }

      if (this.res.mapSortantes == null) {
        this.SortEmpty = null;
      } else {
        this.SortEmpty = Object.keys(this.res.mapSortantes);
      }

      this.ngxLoader.stopLoader('loader-01');

      //this.SortEmpty = Object.keys(this.res.mapSortantes).length === 0 && this.res.mapSortantes.constructor === Object;
      //this.EnterEmpty = Object.keys(this.res.mapEntrantes).length === 0 && this.res.mapEntrantes.constructor === Object;
      //console.log(this.SortEmpty, this.EnterEmpty)


      // //console.log(res.mapEntrantes);
      // var getKeysArray = Object.keys(res.mapEntrantes);
      // var getValueArray = Object.values(res.mapEntrantes);

      // Object.keys(res.mapEntrantes).forEach(Key => {
      //   console.log(Key + " : \n")
      //   res.mapEntrantes[Key].forEach(element => {
      //     console.log(element);
      //   });
      // });
      // //console.log(getKeysArray, getValueArray)

    })


  }

  NewSearch(mot: string) {
    console.log(mot);
    this.message = mot;
    this.ngxLoader.startLoader('loader-01'); // start non-master loader

    this.apiWord.getMot(this.message, this.relation).subscribe((res: Mot) => {


      this.res = res;
      if (this.res.mapEntrantes == null) {
        this.EnterEmpty = null;
      } else {
        this.EnterEmpty = Object.keys(this.res.mapEntrantes);
      }

      if (this.res.mapSortantes == null) {
        this.SortEmpty = null;
      } else {
        this.SortEmpty = Object.keys(this.res.mapSortantes);
      }

      this.ngxLoader.stopLoader('loader-01');

    })

  }
}
