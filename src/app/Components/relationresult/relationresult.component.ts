import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relationresult',
  templateUrl: './relationresult.component.html',
  styleUrls: ['./relationresult.component.css']
})
export class RelationresultComponent implements OnInit {

  @Input() mapNames: any;
  @Input() map: any;
  @Input() pages: any;
  @Input() bool: any;

  constructor() { }

  ngOnInit() {
  }

}
