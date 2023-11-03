import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeopleComponent } from './list-people.component';

describe('ListPeopleComponent', () => {
  let component: ListPeopleComponent;
  let fixture: ComponentFixture<ListPeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPeopleComponent]
    });
    fixture = TestBed.createComponent(ListPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
