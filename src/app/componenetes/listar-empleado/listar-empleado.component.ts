import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { Empleado } from 'src/app/servicio/Empleado';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css'],
})
export class ListarEmpleadoComponent implements OnInit {
  empleados: any[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.Listarempleados();
  }
  Listarempleados() {
    this.crudService.ListarEmpleado().subscribe(
      (lista) => {
        this.empleados = lista as any;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  borrarRegistro(id:number) {
    console.log(id);
    this.crudService.BorrarEmpleado(id).subscribe(
      (response) => {
        this.Listarempleados();
      },
      (Error) => {}
    );
  }
  actualizarPagina() {
    location.reload();
  }
}
