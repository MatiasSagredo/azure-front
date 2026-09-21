import { Component, inject, signal } from '@angular/core';
import { NgForOf } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'store',
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {
  public readonly test = signal<any[]>([])

  //any[] = [];

  constructor() {
    const Init = async () => {
      // const response = fetch("http://localhost:3000/v1/catalogo").then(
      //     async(value:Response)=>{
      //         const data :any[]= await value.json()
      //         this.test.set(data)
      //         console.log(data[0])
      //     }
      // )
      this.test.set([
        {
          "id": 1,
          "name": "Yoquer",
          "background_image": "https://images.meme-arsenal.com/8fd2dc37933b367707b275dd760301c9.jpg"
        },
        {
          "id": 2,
          "name": "Yoquer 2",
          "background_image": "https://images.meme-arsenal.com/8fd2dc37933b367707b275dd760301c9.jpg"
        }, {
          "id": 3,
          "name": "Yoquer 3",
          "background_image": "https://images.meme-arsenal.com/8fd2dc37933b367707b275dd760301c9.jpg"
        },
        {
          "id": 4,
          "name": "Yoquer 4",
          "background_image": "https://images.meme-arsenal.com/8fd2dc37933b367707b275dd760301c9.jpg"
        }
      ])
    }

    Init()
  }



}

