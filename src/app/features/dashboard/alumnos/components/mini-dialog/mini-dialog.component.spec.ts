import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDialogComponent } from './mini-dialog.component';

describe('MiniDialogComponent', () => {
  let component: MiniDialogComponent;
  let fixture: ComponentFixture<MiniDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
