import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  public nome: string = "";

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  // KeyUp(event: any) {
  //   this.nome = event.target.value;
  // }

}
