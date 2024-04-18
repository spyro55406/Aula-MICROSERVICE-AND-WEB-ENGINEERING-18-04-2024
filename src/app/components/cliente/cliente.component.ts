import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/Cliente';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
    clientes:Cliente[] = [];
    clientForm: FormGroup = new FormGroup({})

   constructor(private clienteService:ClienteService, private formBuilder: FormBuilder) {
    this.clientForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

    generateRandomString(length: number): string  {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

  inserir(){
    if(this.clientForm.valid){
      const clientNovo:Cliente = {
        nome: this.clientForm.value.nome,
        telefone: this.clientForm.value.telefone,
        id: this.generateRandomString(6)
      }
      this.clientForm.reset()
      this.clienteService.adicionar(clientNovo)
      alert('Cadastrado com sucesso!')
    }
  }

  listar():void{
      this.clientes = this.clienteService.listar();
  }

  remover(id:string):void{
    this.clienteService.remover(id);
    alert('Removido com sucesso!')
  }

  ngOnInit():void{
    this.listar();
  }

}
