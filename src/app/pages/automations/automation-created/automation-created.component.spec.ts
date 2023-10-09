import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationCreatedComponent } from './automation-created.component';

describe('AutomationCreatedComponent', () => {
  let component: AutomationCreatedComponent;
  let fixture: ComponentFixture<AutomationCreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomationCreatedComponent]
    });
    fixture = TestBed.createComponent(AutomationCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
