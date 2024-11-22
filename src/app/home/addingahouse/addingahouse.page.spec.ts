import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddingahousePage } from './addingahouse.page';

describe('AddingahousePage', () => {
  let component: AddingahousePage;
  let fixture: ComponentFixture<AddingahousePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingahousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
