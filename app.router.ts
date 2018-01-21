import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoggedInComponent } from './logged-in/logged-in.component';

// Route Configuration.
export const routes: Routes = [
    { path: 'loggedin', component: LoggedInComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);