import { Component, OnInit } from '@angular/core';
import {jogador} from '../classes/personagens';
import {MensagensService} from "../mensagens.service";

@Component({
  selector: 'app-ver-personagem',
  templateUrl: './ver-personagem.component.html',
  styleUrls: ['./ver-personagem.component.css']
})
export class VerPersonagemComponent implements OnInit {

  player = new jogador();
  morreu = false;
  constructor(public mensagensService: MensagensService) 
  {
  }
  CriaPlayer():void
  {
    this.player.ataque = 5;
    this.player.defesa =3;
    this.player.nome = "Jogador";
    this.player.mana = 10;
    this.player.atualVida =30;
    this.player.maxVida = 30;
    this.Log("personagem criado")
  }
  Log(mensagem: string):void
  {
    this.mensagensService.addMensagem(`Ver-personagem: ${mensagem}`)
  }

  BotaoDano():void
  {
    if(this.player.TomaDano(5) == true)
    {
      this.morreu = true;
      this.Log("Personagem desmaiou");
    }
  }
  
  ngOnInit() 
  {
   this.CriaPlayer();
  }

}
