import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDatesComponent } from './archive-dates.component';

describe('ArchiveDatesComponent', () => {
  let component: ArchiveDatesComponent;
  let fixture: ComponentFixture<ArchiveDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
