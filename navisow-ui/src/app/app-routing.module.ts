import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { OpenCloseComponent } from './open-close/open-close.component';


const routes: Routes = [
  { path: 'address-form', component: AddressFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'nav', component: NavComponent },
  { path: 'open-close', component: OpenCloseComponent },
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent },
  { path: '', redirectTo: '/nav', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
