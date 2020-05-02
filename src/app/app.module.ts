import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersFilterPipe } from './users-filter.pipe';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, UsersComponent, UsersFilterPipe, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, StoreModule.forRoot(reducers, {
    metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    }
  }), !environment.production ? StoreDevtoolsModule.instrument() : [], EffectsModule.forRoot([UserEffects]), FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent], // default component
})
export class AppModule { }
