import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

const routes=[
  {path:'',component:IndexComponent},
  {path:'index',component:IndexComponent},
  {path:'user/center',component:UserCenterComponent},
  {path:'**',component:NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserCenterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
