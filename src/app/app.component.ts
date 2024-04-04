import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CasillaComponent } from "./casilla/casilla.component";
import { TecladoComponent } from "./teclado/teclado.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, CasillaComponent, TecladoComponent,CommonModule]
})
export class AppComponent {

  palabras = ['AUDIO', 'LUCIO', 'CARRO', 'DEBER']; 

  Resultado: string = '';

  cajas = [
    [{ class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }],
    [{ class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }],
    [{ class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }],
    [{ class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }],
    [{ class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }],
    [{ class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }, { class: '', key: '', rotateAnimation: false }]
  ];
  

  rowIndex = 0;
  currentRowIndex = 0;

  constructor() {
    this.selectRandomWord();
  }

  selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.palabras.length);
    this.Resultado = this.palabras[randomIndex];
  }

  handleChange(key: any) {
    console.log({ key })

    if (key === 'BACKSPACE') {
      if (this.currentRowIndex > 0) {
        this.clearKeyFromCurrenIndex()
      }
      return;
    }

    if (key === 'ENTER') {
      this.submitData()
      return;
    }

    if (this.currentRowIndex < 5 && this.rowIndex < 6) {
      this.cajas[this.rowIndex][this.currentRowIndex] = { class: '', key: key, rotateAnimation: false };
      console.log({ box: this.cajas })
      this.currentRowIndex++
    }
  }

  clearKeyFromCurrenIndex() {
    console.log('espacio')
    this.cajas[this.rowIndex][this.currentRowIndex - 1] = { class: '', key: '', rotateAnimation: false };
    this.currentRowIndex--
    console.log({ currentRowIndex: this.currentRowIndex, box: this.cajas })
  }

  submitData() {
    let clonedCopyofActualGuess = this.Resultado;
    console.log('enter')

    if (this.currentRowIndex === 5 && this.rowIndex < 6) {
      let guessedString = this.cajas[this.rowIndex].map((item) => item.key).join('');

      console.log({ guessedString })

      if (this.Resultado === guessedString) {
        alert('¡Felicitaciones lo hiciste!');
        this.resetGame();
        return;
      }

      this.cajas[this.rowIndex].map((item, index) => {
        if (item.key === this.Resultado[index]) {
          item.class = "green";
          clonedCopyofActualGuess = clonedCopyofActualGuess.replace(item.key, '')
        }
      })

      this.cajas[this.rowIndex].map((item, index) => {
        if (clonedCopyofActualGuess.includes(item.key)) {
          item.class = 'yellow';
        }
      })

      this.cajas[this.rowIndex].map((item) => {
        if (item.class == '') {
          item.class = "grey";
        }
      })

      console.log({ cajas: this.cajas })

      // Set animation to rotate boxes in the row
      this.rotateBoxesInRow();

      if (this.Resultado !== guessedString) {
        if (this.rowIndex < 5) {
          this.rowIndex++;
          this.currentRowIndex = 0;
        } else {
          alert('¡Se terminó el juego! No lograste adivinar la palabra.');
          this.resetGame();
        }
      }
    }
  }

  rotateBoxesInRow() {
    let rowIndex = this.rowIndex;
    let currentRowIndex = this.currentRowIndex;
    let boxes = this.cajas[rowIndex];

    // Rotate boxes one by one with interval
    for (let i = 0; i < currentRowIndex; i++) {
      setTimeout(() => {
        boxes[i].rotateAnimation = true;
      }, i * 300); // Adjust the duration as needed
    }
  }

  resetGame() {
    this.rowIndex = 0;
    this.currentRowIndex = 0;
    this.clearAllBoxes();
    this.selectRandomWord();
  }

  clearAllBoxes() {
    for (let i = 0; i < this.cajas.length; i++) {
      for (let j = 0; j < this.cajas[i].length; j++) {
        this.cajas[i][j].class = '';
        this.cajas[i][j].key = '';
        this.cajas[i][j].rotateAnimation = false;
      }
    }
  }

}