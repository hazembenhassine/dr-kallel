import { Component, OnInit } from '@angular/core';
import { MedService } from '../../core/services/med.service';
import { Client } from '../../core/models/client.model';

@Component({
  selector: 'med-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quotes: Client[];
  activeQuote: Client;

  constructor(private api: MedService) { }

  ngOnInit() {
    this.getQuotes();
  }

  getQuotes() {
    this.api.getClientQuotes().then(({data, total}) => {
      this.quotes = data;
      this.activeQuote = this.quotes[Math.floor(Math.random() * total)];
    }).catch(() => {
      console.error('ERROR!');
    });
  }

}
