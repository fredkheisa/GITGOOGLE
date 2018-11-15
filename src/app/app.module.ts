import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageService } from './service/landing-page.service';




import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DateCountPipe } from './date-count.pipe';
import { ReposComponent } from './repos/repos.component';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DateCountPipe,
    ReposComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [LandingPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
