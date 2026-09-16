import { Component, inject, signal } from '@angular/core';
import { NgForOf } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'store',
  templateUrl: './store.html',
})
export class Store {
    public test:string[] = [
        "risk of rain 2",
        "devil survivor 2",
        "half life blueshift",
        "rabbit hole",
        "Etrian odyssey 3 HD",
        "Terraria",
        "Minecraft"
    
    ];
}

