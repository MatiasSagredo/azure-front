import { Component, inject, signal } from '@angular/core';
import { NgForOf } from '../../../node_modules/@angular/common/types/_common_module-chunk';
import { Api } from '../api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'auditing',
  templateUrl: './auditing.html',
})
export class Auditing {
    public readonly auditList = signal<any[]>([])
    private readonly api = inject(Api);
    protected readonly code = signal<number | null>(null);


    constructor(){    
        this.api.licenseAudit().subscribe({
            next: (audits) => {
                // avoid issues on empty object

                this.auditList.set(audits);
                this.code.set(200);
            },
            error: (e: HttpErrorResponse) => {
                this.code.set(e.status);
            },
        });

    }



}

