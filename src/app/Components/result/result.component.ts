import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { Mot } from 'src/app/Model/Mot';
import { Relation } from 'src/app/Model/Relation';
import { Key } from 'protractor';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as $ from 'jquery';


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

  pages = {};
  pagesSortantes = {};

  SortEmpty: any;
  EnterEmpty: any = null;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private httpClient: HttpClient, private apiWord: ServiceService, private ngxLoader: NgxUiLoaderService) { }

  sendMessage(mot: string) {
    this.messageEvent.emit(mot)
  }
  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['message'] !== undefined)
      this.message = changes['message'].currentValue;

    if (changes['relation'] !== undefined)
      this.relation = changes['relation'].currentValue;

    this.ngxLoader.startLoader('loader-01');

    this.apiWord.getMot(this.message, this.relation).subscribe((res: Mot) => {

      this.res = res;

      if (this.res.mapEntrantes == null && this.res.mapEntrantes == undefined) {
        this.EnterEmpty = null;
      } else {
        this.res.mapEntrantesNames = Object.keys(this.res.mapEntrantes);
        for (var e of this.res.mapEntrantesNames) {
          this.pages[e] = 1;
        }
        this.EnterEmpty = Object.keys(this.res.mapEntrantes);
      }
      if (this.res.mapSortantes == null && this.res.mapSortantes == undefined) {
        this.SortEmpty = null;
      } else {
        this.res.mapSortantesNames = Object.keys(this.res.mapSortantes);
        for (var a of this.res.mapSortantesNames) {
          this.pagesSortantes[a] = 1;
        }
        this.SortEmpty = Object.keys(this.res.mapSortantes);
      }

      this.ngxLoader.stopLoader('loader-01');


    })


  }

  NewSearch(mot: string) {
    this.message = mot;
    this.ngxLoader.startLoader('loader-01'); // start non-master loader
    this.sendMessage(mot);
    this.apiWord.getMot(this.message, this.relation).subscribe((res: Mot) => {

      this.res = res;
      if (this.res.mapEntrantes == null && this.res.mapEntrantes == undefined) {
        this.EnterEmpty = null;
      } else {
        this.res.mapEntrantesNames = Object.keys(this.res.mapEntrantes);
        for (var e of this.res.mapEntrantesNames) {
          this.pages[e] = 1;
        }
        this.EnterEmpty = Object.keys(this.res.mapEntrantes);
      }

      if (this.res.mapSortantes == null && this.res.mapSortantes == undefined) {
        this.SortEmpty = null;
      } else {
        this.res.mapSortantesNames = Object.keys(this.res.mapSortantes);
        for (var a of this.res.mapSortantesNames) {
          this.pagesSortantes[a] = 1;
        }
        this.SortEmpty = Object.keys(this.res.mapSortantes);
      }

      this.ngxLoader.stopLoader('loader-01');

    })

  }
}
