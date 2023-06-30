import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataViewComponent } from './basic-data-view.component';

describe('BasicDataViewComponent', () => {
  let component: BasicDataViewComponent;
  let fixture: ComponentFixture<BasicDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
