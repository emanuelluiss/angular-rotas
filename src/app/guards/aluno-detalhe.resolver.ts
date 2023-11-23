import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Alunos } from '../alunos/alunos';
import { AlunosService } from '../alunos/alunos.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Alunos>{

  constructor(private alunosService: AlunosService){}

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Alunos | Observable<Alunos> | Promise<Alunos> {

      let id = route.params['id'];
      return this.alunosService.getAluno(id);
  }
}
