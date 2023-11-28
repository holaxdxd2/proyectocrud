import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './componenetes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componenetes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componenetes/listar-empleado/listar-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
