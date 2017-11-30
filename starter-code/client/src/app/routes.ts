import { RouterModule, Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
const myRoutes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',  component: EntryListComponent },
  { path: ':id',  component: SingleEntryComponent }
];

export { myRoutes };
