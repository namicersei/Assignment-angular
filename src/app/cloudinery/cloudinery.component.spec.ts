import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudineryComponent } from './cloudinery.component';

describe('CloudineryComponent', () => {
  let component: CloudineryComponent;
  let fixture: ComponentFixture<CloudineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
