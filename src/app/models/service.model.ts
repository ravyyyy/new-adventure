import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Service{
    bigTitle!: string;
    smallTitle!: string;
    description!: string;

    constructor()
    {

    }
}