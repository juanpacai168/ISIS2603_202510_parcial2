import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosListComponent } from './candidatos/candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos/candidatos-detail/candidatos-detail.component';

export const routes: Routes = [
  { path: '',             component: CandidatosListComponent,   pathMatch: 'full' },
  { path: 'candidatos/:id',   component: CandidatosDetailComponent },
  { path: '**',           redirectTo: '' }
];

