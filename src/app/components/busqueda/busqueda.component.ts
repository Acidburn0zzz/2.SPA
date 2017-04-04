import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from "../../servicios/heroes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  heroes:any[];
  termino : string;

  constructor(private _heroesService: HeroesService,private activatedRoute: ActivatedRoute, private router:Router){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(

      params => { this.termino = params['termino']; this.heroes = this._heroesService.buscarHeroes(params['termino'])});
  }


  verHeroe(idx: number){
    this.router.navigate(['/heroe',idx]);
  }

}
