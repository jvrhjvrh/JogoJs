import { Component, OnInit } from '@angular/core';
import {MensagensService} from "../mensagens.service";

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(public mensagensService: MensagensService) { }

  ngOnInit() {
  }

}
