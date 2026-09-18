import { Component, inject, signal } from '@angular/core';
import { NgForOf } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'store',
  templateUrl: './store.html',
})
export class Store {
    public readonly test = signal<any[]>([])
    
    //any[] = [];

    constructor(){    
        const Init = async ()=>{
            const response = fetch("http://localhost:3000/v1/catalogo").then(
                async(value:Response)=>{
                    const data :any[]= await value.json()
                    this.test.set(data)
                    console.log(data[0])
                }
            )
        }

        Init()
    }



}

