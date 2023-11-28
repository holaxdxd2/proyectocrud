import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'; // Asegúrate de importar catchError
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API: string = 'http://127.0.0.1:8000/api/empleados';

  constructor(private clienteHttp: HttpClient) {}

  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    return this.clienteHttp.post(this.API, datosEmpleado).pipe(
      catchError((error) => {
        console.error('Error al agregar empleado:', error);
        throw error; // Propaga el error
      })
    );
  }
  ListarEmpleado() {
    return this.clienteHttp.get(this.API).pipe(
      catchError((error) => {
        console.error('Error al listar empleados:', error);
        throw error; // Propaga el error
      })
    );
  }
  BorrarEmpleado(id: any): Observable<any> {
    return this.clienteHttp.delete(`${this.API}/${id}`).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
  ActualizarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.clienteHttp.put<Empleado>(
      `${this.API}/empleados/${empleado.id}`,
      empleado
    );
  }
}
