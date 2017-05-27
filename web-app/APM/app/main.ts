// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//everything to be presented on screen defined in app.module.ts
platformBrowserDynamic().bootstrapModule(AppModule);
