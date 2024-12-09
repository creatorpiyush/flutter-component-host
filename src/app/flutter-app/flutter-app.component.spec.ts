import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterAppComponent } from './flutter-app.component';

describe('FlutterAppComponent', () => {
  let component: FlutterAppComponent;
  let fixture: ComponentFixture<FlutterAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlutterAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlutterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
