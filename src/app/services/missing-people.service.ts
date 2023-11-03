import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError, map, Observable } from 'rxjs';
import { FilterInterface } from '../interfaces/filter.interface';
import { ResponseInterface } from '../interfaces/response.interface';

@Injectable()
export class MissingPeopleService {
  private url = 'https://abitus-api.pjc.mt.gov.br/v1';

  constructor(private httpClient: HttpClient) {}

  getById(id: string) {
    return this.httpClient.get(`${this.url}/pessoas/${id}`).pipe(
      map((response) => response),
      catchError(this.serviceError)
    );
  }

  getAll(filter: Partial<FilterInterface>): Observable<ResponseInterface> {
    return this.httpClient
      .get<ResponseInterface>(
        `${this.url}/pessoas/aberto/filtro?faixaIdadeFinal=${
          filter?.idade || 0
        }&faixaIdadeInicial=${filter?.idade || 0}&nome=${
          filter?.nome || ''
        }&porPagina=12&sexo=${filter?.sexo || ''}&status=DESAPARECIDO&pagina=${
          filter?.pagina || 0
        }`
      )
      .pipe(
        map((response) => response),
        catchError(this.serviceError)
      );
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];
    let customResponse = new Error();
    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unknown Error') {
        customError.push('Unknown Error');
        response.error.errors = customError;
      }
    }
    if (response.status === 500) {
      customError.push('Error processing request');
      customResponse.message = customError.join('\n');
      return throwError(() => customResponse);
    }
    return throwError(() => response);
  }
}
