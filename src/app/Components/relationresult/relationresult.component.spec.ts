import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationresultComponent } from './relationresult.component';

describe('RelationresultComponent', () => {
  let component: RelationresultComponent;
  let fixture: ComponentFixture<RelationresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
