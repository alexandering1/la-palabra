import { Component ,EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teclado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.sass'
})
export class TecladoComponent {


  
  @Output() keyPressed = new EventEmitter<string>();

  TECLADO = [
    { key: 'Q', class: '' },
    { key: 'W', class: '' },
    { key: 'E', class: '' },
    { key: 'R', class: '' },
    { key: 'T', class: '' },
    { key: 'Y', class: '' },
    { key: 'U', class: '' },
    { key: 'I', class: '' },
    { key: 'O', class: '' },
    { key: 'P', class: '' },
    { key: 'A', class: '' },
    { key: 'S', class: '' },
    { key: 'D', class: '' },
    { key: 'F', class: '' },
    { key: 'G', class: '' },
    { key: 'H', class: '' },
    { key: 'J', class: '' },
    { key: 'K', class: '' },
    { key: 'L', class: '' },
    { key: 'ENTER', class: '' },
    { key: 'Z', class: '' },
    { key: 'X', class: '' },
    { key: 'C', class: '' },
    { key: 'V', class: '' },
    { key: 'B', class: '' },
    { key: 'N', class: '' },
    { key: 'M', class: '' },
    { key: 'BACKSPACE', class: '' }
  ];

  handleClick(key: string) {
    this.keyPressed.emit(key);
  
}

}
