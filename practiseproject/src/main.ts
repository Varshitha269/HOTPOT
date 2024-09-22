import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';// Import your routing file
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
platformBrowserDynamic().bootstrapModule(AppRoutingModule)
  .catch(err => console.error(err));
