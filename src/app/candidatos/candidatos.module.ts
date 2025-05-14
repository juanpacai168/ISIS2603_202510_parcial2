import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';



@NgModule({

  imports: [
    CommonModule, CandidatosDetailComponent, CandidatosListComponent
  ],
  exports: [
    CandidatosListComponent, CandidatosDetailComponent
  ]

})
export class CandidatosModule { }
