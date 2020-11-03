import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudViewComponent } from './crudView/crudView.component';
import { DBconnectService } from './DBconnect.service';
import { HttpClientModule } from '@angular/common/http';
import { CrudAddComponent } from './crudAdd/crudAdd.component';

@NgModule({
  declarations: [	
    AppComponent,
    CrudViewComponent,
      CrudAddComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [DBconnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
