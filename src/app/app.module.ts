import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material-module.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { TimelineModule } from './timeline/timeline.module';
import { RegisterModule } from './register/register.module';
import { ProfileModule } from './profile/profile.module';
import { ForgetModule } from './forget/forget.module';
import {LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { AuthService } from '../app/shared/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './shared/guard/auth.guard';
import { DialogprofileComponent } from './profile/dialogs/dialogprofile/dialogprofile.component';
import { DialogComponent } from './timeline/dialogs/likes-dialog/likes-dialog.component';
import {TokenInterceptorService} from './interceptor/token-interceptor.service';
import { SearchEngineModule } from './search-engine/search-engine.module';
import { EditprofileDialogComponent } from './profile/dialogs/editprofile-dialog/editprofile-dialog.component';
import { PasswordDialogComponent } from './profile/dialogs/password-dialog/password-dialog.component';
import { UserModule } from './user-profile/user.module';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    ToolbarModule,
    TimelineModule,
    RegisterModule,
    ProfileModule,
    UserModule,
    ForgetModule,
    LoginModule,
    SearchEngineModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormsModule],
  providers: [AuthService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
 entryComponents: [DialogComponent, DialogprofileComponent, EditprofileDialogComponent, PasswordDialogComponent]
})
export class AppModule {}
