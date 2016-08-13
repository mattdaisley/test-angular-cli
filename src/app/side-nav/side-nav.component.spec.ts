
import { addProviders, async, inject } from '@angular/core/testing';
import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  beforeEach(() => {
    addProviders([SideNavComponent]);
  });

  it('should create the sideNav',
    inject([SideNavComponent], (sideNav: SideNavComponent) => {
      expect(sideNav).toBeTruthy();
    }));

  it('should have nav items',
    inject([SideNavComponent], (sideNav: SideNavComponent) => {
      sideNav.ngOnInit();
      expect(sideNav.navItems.length > 0).toBeTruthy();
    }));

});
