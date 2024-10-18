import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRestService {
  readonly baseUrl = 'http://localhost/back/';
  private token?: string;

  public setToken(token: string) {
    this.token = token;
  }

  public isThereUser(): boolean {
    return !!this.token;
  }

  private getHeaders(): HeadersInit {
    if (this.token) {
      return {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'appliction/json',
      };
    } else {
      return {
        'Content-Type': 'appliction/json',
      };
    }
  }

  public async post<T = any>(url: string, body: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body,
      });
      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
  constructor() {}
}
