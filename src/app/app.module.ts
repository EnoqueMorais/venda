import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EditarModalPageModule } from './editar-modal/editar-modal.module'; //importar etapa 1
import { Camera } from '@ionic-native/camera/ngx'; // importar etapa 2
import { HttpClientModule } from '@angular/common/http';//Importar, etapa 3
import { ProdutoPageModule } from './produto/produto.module'; //importar etapa 1
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    EditarModalPageModule, //Importar, etapa 1
    HttpClientModule, //Importar, etapa 3
    ProdutoPageModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, // importar etapa 2
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
