import { Component, inject, signal } from '@angular/core';
import { Api } from '../api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'admin',
  templateUrl: './admin.html',
})
export class Admin {
    public readonly licenseList = signal<any[]>([])
    private readonly api = inject(Api);
    protected readonly code = signal<number | null>(null);


    constructor(){    
        this.api.licenses().subscribe({
            next: (licenses) => {
                console.log(licenses)
                // avoid issues on empty object
                if (licenses.length == undefined)licenses = []
                this.licenseList.set(licenses);
                this.code.set(200);
            },
            error: (e: HttpErrorResponse) => {
                this.code.set(e.status);
            },
        });

    }

    protected async revoke(id:number){
        await this.api.revokeGame(id).subscribe()
        this.api.licenses().subscribe({
            next: (licenses) => {
                console.log(licenses)
                // avoid issues on empty object
                if (licenses.length == undefined)licenses = []
                this.licenseList.set(licenses);
                this.code.set(200);
            },
            error: (e: HttpErrorResponse) => {
                this.code.set(e.status);
            },
        });

    }

}

