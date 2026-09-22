import { Component, inject, signal } from '@angular/core';
import { NgForOf } from '../../../node_modules/@angular/common/types/_common_module-chunk';
import { Api } from '../api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'store',
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {
  public readonly gameList = signal<any[]>([])
  private readonly api = inject(Api);
  protected readonly code = signal<number | null>(null);


  constructor() {
    this.api.games().subscribe({
      next: (games) => {
        this.gameList.set(games);
        this.code.set(200);
      },
      error: (e: HttpErrorResponse) => {
        this.code.set(e.status);
      },
    });

  }
}
