import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteitemsComponent } from './noteitems.component';

describe('NoteitemsComponent', () => {
  let component: NoteitemsComponent;
  let fixture: ComponentFixture<NoteitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
