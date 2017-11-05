import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class QuoteService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuote() {
    const url = `${environment.serverUrl}/jokes/random?category=dev`;
    return this.httpClient.get(url);
  }

}
