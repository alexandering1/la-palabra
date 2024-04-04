import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casilla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casilla.component.html',
  styleUrl: './casilla.component.sass'
})
export class CasillaComponent {

  @Input() casilla: any;

}
