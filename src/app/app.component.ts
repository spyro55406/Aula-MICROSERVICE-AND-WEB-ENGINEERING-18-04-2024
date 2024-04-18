import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
}
