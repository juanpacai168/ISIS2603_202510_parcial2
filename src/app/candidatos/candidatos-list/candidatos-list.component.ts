import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { candidatosService } from '../candidatosService';
import { Candidatos } from '../candidatos';
@Component({
  selector: 'app-candidatos-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})

export class CandidatosListComponent implements OnInit {
  candidatos: Candidatos[] = [];
  papaaleatorio = '';
 

  constructor(
    private restauranteService: candidatosService,
    private router: Router             
  ) {}

  ngOnInit(): void {
    this.restauranteService.getcandidatos().subscribe(
      (response: Candidatos[] | { candidatos: Candidatos[] }) => {
        const list = Array.isArray(response) ? response : (response as any).candidatos || [];
        this.candidatos = list;
        this.papaaleatorio = this.randompicker(list);
      },
      err => console.error(err)
    );
  }

  randompicker(array: Candidatos[]): string {
    if (!array || array.length === 0) return '';
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]?.nombre || '';
  }

goToDetail(r: Candidatos) {
  console.log('navegando a candidatos', r.id);  
  this.router.navigate(['/candidatos', r.id]);
}
}