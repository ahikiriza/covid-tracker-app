import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { DataTableComponent } from './country/components/data-table/data-table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    SearchComponent,
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SidebarComponent,
    TopbarComponent,
    SearchComponent,
    DataTableComponent
  ]
 
})
export class SharedModule { }
