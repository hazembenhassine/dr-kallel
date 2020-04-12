import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { MedService } from './core/services/med.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYPNbjx2XPZn3DmYbJnJBvprWddtjS5k8'
    })
  ],
  providers: [MedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
