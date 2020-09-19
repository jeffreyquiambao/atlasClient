import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramGeneratorComponent } from './program-generator.component';

describe('ProgramGeneratorComponent', () => {
  let component: ProgramGeneratorComponent;
  let fixture: ComponentFixture<ProgramGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
