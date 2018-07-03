import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageItemPartnerComponent } from './message-item-partner.component';

describe('MessageItemPartnerComponent', () => {
  let component: MessageItemPartnerComponent;
  let fixture: ComponentFixture<MessageItemPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageItemPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageItemPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
