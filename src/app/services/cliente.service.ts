import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }

  //Esta lista virá da API
  clientes:Cliente[] = [
    {id: "fdaklfads", nome: "Thiago Xavier"},
    {id: "teste", nome : "Teste 2", telefone:"2345678"}
  ];

  listar():Cliente[]{
    return this.clientes;
  }

  remover(id:string){
    const cliente = this.clientes.find(c => c.id == id);

    if(cliente){
       const index = this.clientes.indexOf(cliente);
       this.clientes.splice(index,1);
    }
  }

  adicionar(cliente:Cliente){
    this.clientes.push(cliente);
  }
}
