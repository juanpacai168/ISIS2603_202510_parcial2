import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule }      from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Candidatos } from '../candidatos';
import { candidatosService } from '../candidatosService';

@Component({
  selector: 'app-candidatos-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  candidato!: Candidatos;
  
  constructor(
    private route: ActivatedRoute,
    private srvc: candidatosService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.loadDetail(id);
    });
  }

  private loadDetail(id: number): void {
    this.srvc.getcandidato(id).subscribe({
      next: det => {
        this.candidato = det;
      },
      error: () => this.router.navigate(['/'])
    });
  }


  volver(): void {
    this.router.navigate(['/']);
  }


}
