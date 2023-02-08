import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { LivrosResultado, Item } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes'
  constructor(private http: HttpClient) { }

  // OPERADORES E SUAS UTILIDADES

  // PIPE =
  // Serve para agrupar um conjunto de outros operadores.
  // O pipe é como um cano que armazena um operador apos o outro

  // TAP =
  // O tap é como se fosse um espião, serve para debuggar a repsosta do serviço
  // Pode ser usado em qualquer etapa da aplicação e não afeta o fluxo do observanble anterior

  // MAP =
  // Server para entrar dentro da resposta do serviço e trazer um item especifico do objeto

  buscar(valorDigitado: string): Observable<any> {
    const params = new HttpParams().append('q', valorDigitado)
    return this.http.get<any>(this.API, { params }).pipe(
      tap(retornoApi => console.log('retornoApi', retornoApi)),
      map(respostaApi => respostaApi.items),
      tap(retornoMap => {
        console.log(retornoMap)
      })

      // tap(retornoMap => {
      //   console.log('retornoMap', retornoMap)
      // })
    )

  }
}
