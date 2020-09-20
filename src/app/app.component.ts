import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import {Router, NavigationEnd} from '@angular/router';
declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atlasClient';
  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-178510197-1', {
        'page-path': event.urlAfterRedirects
      });
    });
  }
}
