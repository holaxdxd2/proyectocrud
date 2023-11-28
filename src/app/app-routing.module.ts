import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AgregarEmpleadoComponent } from './componenetes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componenetes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componenetes/listar-empleado/listar-empleado.component';


export const routes: Routes = [

    {path: '', pathMatch: 'full', redirectTo: 'agregar-empleado'},
    {path: 'agregar-empleado', component: AgregarEmpleadoComponent},
    {path: 'listar-empleado', component: ListarEmpleadoComponent},
    {path: 'editar-empleado/:id', component: EditarEmpleadoComponent}
   

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }