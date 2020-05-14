import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodestackComponent } from './codestack.component';

describe('CodestackComponent', () => {
  let component: CodestackComponent;
  let fixture: ComponentFixture<CodestackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodestackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodestackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
