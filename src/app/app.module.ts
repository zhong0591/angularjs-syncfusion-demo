import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseTableComponent } from './base-table/base-table.component';

// Imported syncfusion Grid module from buttons package
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    BaseTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridAllModule,
    DialogModule,
    DatePickerModule,
    ToolbarModule,
    ListBoxModule,
    ListViewModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
