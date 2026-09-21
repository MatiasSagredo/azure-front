import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.html',
})
export class Callback {
  /** ¿Volvimos con un código en la URL? Es lo único que este componente sabe. */
  protected readonly conCodigo = signal(
    new URLSearchParams(window.location.search).has('code'),
  );

}
