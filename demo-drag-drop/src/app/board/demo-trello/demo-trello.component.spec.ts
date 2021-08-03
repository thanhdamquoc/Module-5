import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTrelloComponent } from './demo-trello.component';

describe('DemoTrelloComponent', () => {
  let component: DemoTrelloComponent;
  let fixture: ComponentFixture<DemoTrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTrelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
