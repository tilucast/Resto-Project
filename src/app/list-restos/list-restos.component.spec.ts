import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestosComponent } from './list-restos.component';

describe('ListRestosComponent', () => {
  let component: ListRestosComponent;
  let fixture: ComponentFixture<ListRestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
