import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMenuComponent } from './content-menu.component';

describe('ContentMenuComponent', () => {
  let component: ContentMenuComponent;
  let fixture: ComponentFixture<ContentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
