import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  mensagens = [];

  addMensagem(mensagem: string)
  {
    this.mensagens.push(mensagem);
  }

  clearMensagem()
  {
    this.mensagens = [];   
  }
  constructor() { }
}
