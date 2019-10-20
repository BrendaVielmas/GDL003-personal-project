import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongLaCucarachaComponent } from './song-la-cucaracha.component';

describe('SongLaCucarachaComponent', () => {
  let component: SongLaCucarachaComponent;
  let fixture: ComponentFixture<SongLaCucarachaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongLaCucarachaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongLaCucarachaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
