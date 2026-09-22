import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * La dirección del gateway de L1. **Un solo lugar en todo el proyecto.**
 *
 * Fíjate en lo que no aparece acá: los puertos 3001 y 3002. El frontend no
 * sabe —ni tiene por qué saber— que detrás del 8080 hay dos microservicios.
 * Eso es exactamente lo que un gateway hace por ti.
 */
export const GATEWAY = 'http://localhost:8080';

export type Game = {
  id: number;
  slug: string;
  name: string;
  relase: string;
  backgroundImage: string;
};


/**
 * El único que habla con el gateway.
 *
 * No hay un solo `Authorization` en este archivo, y es a propósito: adjuntar el
 * token no es trabajo del servicio. Lo hace el **interceptor** que escribes en
 * el tramo 8.7, una vez, para todas las peticiones. Un servicio que arma su
 * propio header es un servicio que hay que arreglar en treinta lugares el día
 * que cambie algo.
 */
@Injectable({ providedIn: 'root' })
export class Api {
  private readonly http = inject(HttpClient);
  games(): Observable<Game[]> {
      return this.http.get<Game[]>(`${GATEWAY}/v1/catalogo`);
    }
    
  library():Observable<Game[]>{
    return this.http.get<Game[]>(`${GATEWAY}/v1/catalogo/biblioteca`);
  }

  licenseAudit():Observable<object[]>{
    return this.http.get<object[]>(`${GATEWAY}/v1/licencias/eliminados`);
  }

  licenses():Observable<object[]>{
    return this.http.get<object[]>(`${GATEWAY}/v1/licencias/`);
  }
  
  buy(id:number){        
    return this.http.post(`${GATEWAY}/v1/licencias/comprar/${id}`,{});
  }

  revokeGame(id:number){        
    return this.http.delete(`${GATEWAY}/v1/licencias/${id}`);
  }


}
